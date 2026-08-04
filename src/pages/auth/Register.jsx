import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../utils/validation";
import { registerUser } from "../../services/authService";
import useAuthStore from "../../store/useAuthStore";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Toggle from "../../components/Toggle";
import Card from "../../components/Card";

export default function Register() {
  const [accountType, setAccountType] = useState("individual");

  // useNavigate lets us send the user to a different page FROM CODE
  // (e.g. after a successful submit), rather than only via clickable links.
  const navigate = useNavigate();

  // Pulls just the setUser action out of our Zustand store.
  // Calling this will update the shared user data every screen can see.
  const setUser = useAuthStore((state) => state.setUser);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: { accountType: "individual" },
  });

  const handleAccountTypeChange = (value) => {
    setAccountType(value);
    setValue("accountType", value);
  };

  const onSubmit = async (data) => {
    try {
      // Call our mock service — this simulates a real API request/response.
      const response = await registerUser(data);

      // Save the returned user into our shared Zustand store, so the
      // Dashboard, Profile, etc. all immediately know who's logged in.
      setUser(response.user);

      // Send the user to their dashboard now that "registration" succeeded.
      navigate("/dashboard");
    } catch (error) {
      // If something goes wrong (once this is a REAL API call, this could be
      // a duplicate phone number, server error, etc.), log it for now.
      // Later, this is where you'd show an error message in the UI.
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-page flex items-center justify-center p-6">
      <Card className="w-full max-w-sm md:max-w-md">
        <h1 className="text-xl mb-1">Create your account</h1>
        <p className="text-sm text-ink-muted mb-6">
          Start saving daily, weekly, or monthly.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <p className="label-caption mb-2">I am registering as</p>
            <Toggle
              options={[
                { label: "Individual", value: "individual" },
                { label: "Group", value: "group" },
              ]}
              value={accountType}
              onChange={handleAccountTypeChange}
            />
          </div>

          <Input
            label={accountType === "group" ? "Group representative name" : "Full name"}
            placeholder="Enter full name"
            {...register("fullName")}
            error={errors.fullName?.message}
          />

          {accountType === "group" && (
            <Input
              label="Group name"
              placeholder="e.g. Bortainor Area Susu Group"
              {...register("groupName")}
              error={errors.groupName?.message}
            />
          )}

          <Input
            label="Phone number"
            placeholder="+233 ..."
            {...register("phone")}
            error={errors.phone?.message}
          />

          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
            error={errors.password?.message}
          />

          <Button type="submit" disabled={isSubmitting} className="mt-2">
            {isSubmitting ? "Creating account..." : "Create account"}
          </Button>

          <a href="/login" className="text-center">
            <Button type="button" variant="outline" className="w-full">
              Log in instead
            </Button>
          </a>
        </form>
      </Card>
    </div>
  );
}
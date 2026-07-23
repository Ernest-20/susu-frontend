import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/reslovers/zod";
import { registerSchema } from "../../utils";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Toggle from "../../components/Toggle";
import Card from "../../components/Card";

export default function Register() {
    const [accountType, setAccountType] = useState("individual");

    const{
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValue: { accountType: "individual" },
    });

    const handleAccountTypeChange = (value) => {
        setAccountType(value);
        setValue("accountType", value);
    };

    const onSubmit = async (data) => {
        // replace with real API once backend is live!
        console.log("Register payload:", data);
    };

    return (
        <div className="min-h-screen bg-page flex item-center justify-center p-6">
            <Card className="w-full max-w-sm">
                <h1 className="text-xl mb-1">Create your account</h1>
                <p className="text-sm text-ink-muted mb-6">
                    Start saving daily, weekly, or monthly.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div>
                        <p className="label-caption mb-2">I am registering as</p>
                        <Toggle
                        option={[
                            { label: "Individual", value: "individual" },
                            { label: "Group", value: "group" },
                        ]}
                        value={accountType}
                        onChange={handleAccountTypeChange}
                        />
                    </div>

                    <Input
                    label={accountType ==="group" ? "Group representation name" : "Full name"}
                    placeholder="Enter full name"
                    {...register("fullName")}
                    error={errors.fullName?.message}
                    />

                    {accountType ==="group" && (
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
                    placeholder="........"
                    {...register("password")}
                    error={errors.password?.message}
                    />

                    <Button type="submit" disabled={isSubmitting} className="mt-2">
                        {isSubmitting ? "Creating account..." : "Creating account"}
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
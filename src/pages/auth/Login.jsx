import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../utils/validation";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Card from "../../components/Card";

export default function Login() {
    const{
        register,
        handleSubmit,
        formState: {errors, isSubmitting },
    } = useForm({ resolver: zodResolver(loginSchema) });

    const onSubmit = async (data) => {
        // replace with real API when backend is live!
        console.log("Login payload", data);
    };

    return (
        <div className="min-h-screen bg-page flex items-center justify-center p-6">
            <Card className="w-full max-w-sm md:max-w-md">
                <h1 className="text-xl mb-1">Welcome back</h1>
                <p className="text-sm text-ink-muted mb-6">log in to track your savings</p>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
                        {isSubmitting ? "Logging in..." : "Log in"}
                    </Button>

                    <a href="/register" className="text-center">
                    <Button type="button" variant="ghost" className="w-full">
                      Don't have an account? Register Now!
                    </Button>
                    </a>
                </form>
            </Card>
        </div>
    );
}
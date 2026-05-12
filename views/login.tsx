"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";

function Login() {
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        router.push("/principal");
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
            <Card className="w-full max-w-md shadow-2xl border-none bg-white/95 backdrop-blur-sm">
                <form onSubmit={handleSubmit}>
                    <CardHeader className="space-y-4 text-center">
                        <div className="flex justify-center gap-3 items-center">
                            <Image
                                src="/alma.jpg"
                                width={40}
                                height={40}
                                alt="Logo"
                                className="object-contain"
                            />
                            <span className="text-2xl font-black tracking-tighter text-slate-900">MIN-EGOCIO</span>
                        </div>
                        <div className="space-y-1 pb-4">
                            <CardTitle className="text-2xl font-bold text-slate-800">Bienvenido</CardTitle>
                            <CardDescription>
                                Inicia sesión para ingresar a tu cuenta
                            </CardDescription>
                        </div>
                    </CardHeader>

                    <CardContent className="space-y-5">
                        <div className="space-y-2">
                            <Label htmlFor="user" className="text-slate-700">Usuario</Label>
                            <Input
                                id="user"
                                type="text"
                                placeholder="Nombre de usuario"
                                className="bg-white"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password" id="password-label" className="text-slate-700">Contraseña</Label>
                                <Button
                                    variant="link"
                                    type="button"
                                    className="h-auto p-0 text-xs text-blue-600 hover:text-blue-800"
                                >
                                    ¿Olvidaste tu contraseña?
                                </Button>
                            </div>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="bg-white"
                                required
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Input id="remember" type="checkbox" className="h-4 w-4 accent-slate-900" />
                            <Label htmlFor="remember" className="text-sm font-medium text-slate-600 cursor-pointer">
                                Recordarme
                            </Label>
                        </div>
                    </CardContent>

                    <CardFooter className="pt-2">
                        <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-6">
                            Iniciar Sesión
                        </Button>
                    </CardFooter>
                </form>
            </Card>
        </div>
    );
}

export default Login;
"use client"

import React from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import { ReceiptText, PlusCircle, CreditCard, Banknote } from "lucide-react";

const ventasRealizadas = [
    { id: "V-001", nombre: "Teclado Mecánico", precio: 85.0, cantidad: 2, metodo: "Tarjeta", fecha: "2024-05-20" },
    { id: "V-002", nombre: "Monitor 24'", precio: 210.0, cantidad: 1, metodo: "Efectivo", fecha: "2024-05-21" },
    { id: "V-003", nombre: "Mouse Gamer", precio: 45.0, cantidad: 3, metodo: "Transferencia", fecha: "2024-05-21" },
];

function Ventas() {
    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            {/* Encabezado */}
            <div className="flex justify-between items-end border-b pb-6">
                <div>
                    <h1 className="text-3xl font-bold flex items-center gap-2">
                        <ReceiptText className="w-8 h-8 text-blue-600" />
                        Registro de Ventas
                    </h1>
                    <p className="text-slate-500 mt-1">Historial detallado de transacciones realizadas.</p>
                </div>

                <ModalRegistrarVenta />
            </div>

            <div className="rounded-xl border bg-white shadow-md overflow-hidden w-full">
                <Table>
                    <TableHeader className="bg-slate-50">
                        <TableRow className="h-16">
                            <TableHead className="font-bold text-lg px-6">Producto</TableHead>
                            <TableHead className="font-bold text-lg text-center">Cantidad</TableHead>
                            <TableHead className="font-bold text-lg text-right">Precio Unit.</TableHead>
                            <TableHead className="font-bold text-lg text-right text-blue-700">Ganancia Total</TableHead>
                            <TableHead className="font-bold text-lg text-center">Método de Pago</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {ventasRealizadas.map((venta) => (
                            <TableRow key={venta.id} className="h-20 hover:bg-slate-50/50">
                                <TableCell className="px-6 font-medium">
                                    <div className="flex flex-col">
                                        <span>{venta.nombre}</span>
                                        <span className="text-xs text-slate-400 font-mono">{venta.id}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-center text-lg">{venta.cantidad}</TableCell>
                                <TableCell className="text-right text-slate-600">${venta.precio.toFixed(2)}</TableCell>
                                <TableCell className="text-right font-bold text-xl text-blue-600">
                                    ${(venta.precio * venta.cantidad).toFixed(2)}
                                </TableCell>
                                <TableCell className="text-center">
                                    <Badge variant="outline" className="gap-1 px-3 py-1">
                                        {venta.metodo === "Tarjeta" ? <CreditCard className="w-3 h-3" /> : <Banknote className="w-3 h-3" />}
                                        {venta.metodo}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

function ModalRegistrarVenta() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700 size-lg gap-2 font-bold px-8 py-6 text-lg shadow-lg">
                    <PlusCircle className="w-6 h-6" /> Registrar Venta
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-125">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Nueva Transacción</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="producto">Producto vendido</Label>
                        <Input id="producto" placeholder="Seleccione o escriba el producto" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="cantidad">Cantidad</Label>
                            <Input id="cantidad" type="number" placeholder="1" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="precio">Precio de Venta</Label>
                            <Input id="precio" type="number" placeholder="0.00" />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label>Método de Pago</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccione método" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="efectivo">Efectivo</SelectItem>
                                <SelectItem value="tarjeta">Tarjeta de Crédito/Débito</SelectItem>
                                <SelectItem value="transferencia">Transferencia Bancaria</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button className="w-full bg-blue-600 text-lg py-6">Finalizar Venta</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Ventas;
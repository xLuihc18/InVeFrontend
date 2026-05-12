"use client"

import React, { useState } from "react";
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { PackagePlus, Search, Pencil, Trash, PackageOpen  } from "lucide-react";

const productosIniciales = [
    { id: 1, nombre: "Teclado Mecanico RGB", categoria: "Perifericos", stock: 15, precio: "85.00"},
    { id: 2, nombre: "Monitor 24' 144Hz", categoria: "Pantallas", stock: 5, precio: "210.00" },
];

function Inventario() {
    const [productos, setProductos] = useState(productosIniciales);

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex">
                    <PackageOpen size={40}/>
                    <h1 className="text-3xl font-bold text-slate-900">Inventario</h1>
                </div>

                <FormularioProducto title="Nuevo Producto" description="Agrega producto.">
                    <Button className="bg-blue-600 hover:bg-blue-700 gap-2">
                        <PackagePlus className="w-4 h-4" /> Nuevo Producto
                    </Button>
                </FormularioProducto>
            </div>

            <div className="relative max-w-sm mt-5">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input placeholder="Buscar producto..." className="pl-10" />
            </div>

            
            <div className="rounded-xl bg-white shadow-sm overflow-hidden w-full">
                <p className="text-muted-foreground mb-6 uppercase font-bold">Gestion de productos</p>
                <Table className="w-full">
                    <TableHeader className="bg-slate-50">
                        <TableRow className="h-16">
                            <TableHead className="font-bold text-lg px-6 w-[40%]">Nombre</TableHead>
                            <TableHead className="font-bold text-lg px-6">Categoría</TableHead>
                            <TableHead className="font-bold text-lg text-center px-6">Stock</TableHead>
                            <TableHead className="font-bold text-lg text-right px-6">Precio</TableHead>
                            <TableHead className="text-right font-bold text-lg px-6">Acción</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {productos.map((prod) => (
                            <TableRow key={prod.id} className="h-20 hover:bg-slate-50/50 transition-colors"> 
                                <TableCell className="font-semibold text-base px-6">
                                    {prod.nombre}
                                </TableCell>
                                <TableCell className="text-base px-6">
                                    {prod.categoria}
                                </TableCell>
                                <TableCell className="text-center text-base px-6">
                                    <span className="text-lg font-medium">{prod.stock}</span>
                                </TableCell>
                                <TableCell className="text-right font-bold text-lg px-6">
                                    S/.{prod.precio}
                                </TableCell>
                                <TableCell className="text-right px-6">
                                    <FormularioProducto
                                        title="Editar Producto"
                                        description="Modifica los detalles del producto seleccionado."
                                        defaultData={prod}
                                    >
                                        <Button variant="ghost" size="lg" className="text-blue-600 hover:bg-blue-50">
                                            <Pencil className="w-6 h-6" />
                                        </Button>
                                        
                                    </FormularioProducto>
                                    <Button variant="ghost" size="lg" className="text-red-600 hover:bg-red-50">
                                            <Trash className="w-6 h-6" />
                                        </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

function FormularioProducto({ title, description, children, defaultData }: any) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-106.25">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Nombre del producto</Label>
                        <Input id="name" defaultValue={defaultData?.nombre} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="category">Categoría</Label>
                            <Input id="category" defaultValue={defaultData?.categoria} />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="price">Precio Venta</Label>
                            <Input id="price" type="number" defaultValue={defaultData?.precio} />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="stock">Stock Inicial</Label>
                        <Input id="stock" type="number" defaultValue={defaultData?.stock} />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="w-full bg-blue-600">Guardar Cambios</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default Inventario;
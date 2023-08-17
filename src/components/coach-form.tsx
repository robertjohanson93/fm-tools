"use client";
import { Button } from "@/components/ui/button";
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
   determination: z.string().min(1).max(2),
   discipline: z.string().min(1).max(2),
   motivating: z.string().min(1).max(2),
   strength: z.string().min(1).max(2),
   quickness: z.string().min(1).max(2),
   attacking: z.string().min(1).max(2),
   defending: z.string().min(1).max(2),
   tactical: z.string().min(1).max(2),
   technical: z.string().min(1).max(2),
   mental: z.string().min(1).max(2),
   distribution: z.string().min(1).max(2),
   handling: z.string().min(1).max(2),
   shotStopping: z.string().min(1).max(2)
})

function CoachForm() {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         determination: "",
         discipline: "",
         motivating: "",
         strength: "",
         quickness: "",
         attacking: "",
         defending: "",
         tactical: "",
         technical: "",
         mental: "",
         distribution: "",
         handling: "",
         shotStopping: ""
      },
   })

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
   }

   return (
      <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className="p-8 pt-6 space-y-8 rounded-[0.5rem] border bg-background shadow">
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Mental Attributes</h3>
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
               <FormField
                 control={form.control}
                 name="determination"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Determination</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               <FormField
                 control={form.control}
                 name="discipline"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Discipline</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               <FormField
                 control={form.control}
                 name="motivating"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Motivating</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>General Attributes</h3>
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
               <FormField
                 control={form.control}
                 name="strength"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Fitness (Strength)</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               <FormField
                 control={form.control}
                 name="quickness"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Fitness (Quickness)</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               <FormField
                 control={form.control}
                 name="attacking"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Attacking</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               <FormField
                 control={form.control}
                 name="defending"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Defending</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               <FormField
                 control={form.control}
                 name="tactical"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Tactical</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               <FormField
                 control={form.control}
                 name="technical"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Technical</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               <FormField
                 control={form.control}
                 name="mental"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>Mental</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
            </div>
            <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>Goalkeeping Attributes</h3>
            <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
               <FormField
                 control={form.control}
                 name="distribution"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>GK (Distribution)</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               <FormField
                 control={form.control}
                 name="handling"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>GK (Handling)</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
               <FormField
                 control={form.control}
                 name="shotStopping"
                 render={({ field }) => (
                   <FormItem>
                     <FormLabel>GK (Shot stopping)</FormLabel>
                     <FormControl>
                       <Input placeholder="1-20" {...field} />
                     </FormControl>
                     <FormMessage />
                   </FormItem>
                 )}
               />
            </div>
           <Button type="submit">Submit</Button>
         </form>
      </Form>
  )
}

export default CoachForm;

'use client';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Minus, Plus } from 'lucide-react';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

type CoachFormProps = {
  updateCoachingValues: (key: string, value: number) => void;
};

type FormValues = {
  determination: number;
  discipline: number;
  motivating: number;
  fitness: number;
  attacking: number;
  defending: number;
  tactical: number;
  technical: number;
  mental: number;
  distribution: number;
  handling: number;
  shotStopping: number;
  [key: string]: number; // Index signature
};

const formSchema = z.object({
  determination: z.number().min(1).max(20),
  discipline: z.number().min(1).max(20),
  motivating: z.number().min(1).max(20),
  fitness: z.number().min(1).max(20),
  attacking: z.number().min(1).max(20),
  defending: z.number().min(1).max(20),
  tactical: z.number().min(1).max(20),
  technical: z.number().min(1).max(20),
  mental: z.number().min(1).max(20),
  distribution: z.number().min(1).max(20),
  handling: z.number().min(1).max(20),
  shotStopping: z.number().min(1).max(20)
});

function CoachForm({ updateCoachingValues }: CoachFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      determination: 10,
      discipline: 10,
      motivating: 10,
      fitness: 10,
      attacking: 10,
      defending: 10,
      tactical: 10,
      technical: 10,
      mental: 10,
      distribution: 10,
      handling: 10,
      shotStopping: 10
    }
  });

  const onSubmit = async (values: FormValues) => {
    try {
      for (const key in values) {
        const value = values[key];
        updateCoachingValues(key, value);
      }
    } catch (error) {
      console.error('Failed to update coaching values:', error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='p-4 md:p-8 space-y-8 rounded-[0.5rem] border bg-background shadow'
      >
        <div className='grid grid-cols-2'>
          <div className='grid gap-2'>
            <h3 className='scroll-m-20 text-lg md:text-2xl'>Coaching</h3>
            <FormField
              control={form.control}
              name='attacking'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Attacking</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='defending'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Defending</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='fitness'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fitness</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='mental'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mental</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='tactical'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tactical</FormLabel>
                  <FormControl>
                    <div className='flex grow-0 gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='technical'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Technical</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className='grid gap-2'>
            <h3 className='scroll-m-20 text-lg md:text-2xl'>Mental & GK</h3>
            <FormField
              control={form.control}
              name='determination'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Determination</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='discipline'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level of Discipline</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='motivating'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Motivating</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='distribution'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GK (Distribution)</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='handling'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GK (Handling)</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='shotStopping'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GK (Shot stopping)</FormLabel>
                  <FormControl>
                    <div className='flex gap-2 items-center'>
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.max(field.value - 1, 1))
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <Input
                        className='mx-2 w-11'
                        type='number'
                        min={1}
                        max={20}
                        {...field}
                        onChange={(event) =>
                          field.onChange(+event.target.value)
                        }
                      />
                      <Button
                        variant='outline'
                        size='icon'
                        onClick={() =>
                          field.onChange(Math.min(field.value + 1, 20))
                        }
                      >
                        <Plus className='h-8 w-4' />
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
}

export default CoachForm;

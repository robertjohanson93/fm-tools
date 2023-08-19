'use client';
import CoachCard from '@/components/coach-card';
import CoachForm from '@/components/coach-form';
import {
  calculateAttTacRating,
  calculateAttTechRating,
  calculateDefTacRating,
  calculateDefTechRating,
  calculateFitQuickRating,
  calculateFitStrRating,
  calculateGkHandRating,
  calculateGkShotRating,
  calculatePossTacRating,
  calculatePossTechRating
} from '@/lib/ratingCalculations';
import React, { useEffect, useState } from 'react';

type CoachingRatingsState = Record<string, number>;
type CoachingValuesState = Record<string, number>;

export default function Coaches() {
  const [coachingRating, setCoachingRating] = useState<CoachingRatingsState>({
    gkShotRating: 0,
    gkHandRating: 0,
    defTacRating: 0,
    defTechRating: 0,
    fitQuickRating: 0,
    fitStrRating: 0,
    possTacRating: 0,
    possTechRating: 0,
    attTacRating: 0,
    attTechRating: 0
  });
  const [coachingValues, setCoachingValues] = useState<CoachingValuesState>({
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
  });
  useEffect(() => {
    const newGkShotRating = calculateGkShotRating(coachingValues);
    const newGkHandRating = calculateGkHandRating(coachingValues);
    const newDefTacRating = calculateDefTacRating(coachingValues);
    const newDefTechRating = calculateDefTechRating(coachingValues);
    const newFitQuickRating = calculateFitQuickRating(coachingValues);
    const newFitStrRating = calculateFitStrRating(coachingValues);
    const newPossTacRating = calculatePossTacRating(coachingValues);
    const newPossTechRating = calculatePossTechRating(coachingValues);
    const newAttTacRating = calculateAttTacRating(coachingValues);
    const newAttTechRating = calculateAttTechRating(coachingValues);

    updateCoachingRating('gkShotRating', newGkShotRating);
    updateCoachingRating('gkHandRating', newGkHandRating);
    updateCoachingRating('defTacRating', newDefTacRating);
    updateCoachingRating('defTechRating', newDefTechRating);
    updateCoachingRating('fitQuickRating', newFitQuickRating);
    updateCoachingRating('fitStrRating', newFitStrRating);
    updateCoachingRating('possTacRating', newPossTacRating);
    updateCoachingRating('possTechRating', newPossTechRating);
    updateCoachingRating('attTacRating', newAttTacRating);
    updateCoachingRating('attTechRating', newAttTechRating);
  }, [coachingValues]);

  const updateCoachingRating = (key: string, value: number) => {
    setCoachingRating((prevValues) => ({
      ...prevValues,
      [key]: value
    }));
  };

  const updateCoachingValues = (key: string, value: number) => {
    setCoachingValues((prevValues) => ({
      ...prevValues,
      [key]: value
    }));
  };

  return (
    <section className='flex min-h-screen flex-col items-start gap-6'>
      <div>
        <h1 className='scroll-m-20 lg:text-5xl'>Calculate Coaching Stars</h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6 [&:not(:last-child)]:mb-6'>
          Use this tool to calculate how many stars your coaches will have in
          training.
        </p>
      </div>
      <div className='w-full lg:max-w-[75%] flex flex-col gap-6'>
        <CoachForm
          coachingRating={coachingRating}
          updateCoachingRating={updateCoachingRating}
          coachingValues={coachingValues}
          updateCoachingValues={updateCoachingValues}
        />
      </div>
      <div className='w-full lg:max-w-[75%] flex flex-col gap-6'>
        <CoachCard
          coachingRating={coachingRating}
          coachingValues={coachingValues}
        />
      </div>
    </section>
  );
}

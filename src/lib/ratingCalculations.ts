type CoachingValuesState = Record<string, number>;

export const calculateGkShotRating = (coachingValues: CoachingValuesState) => {
  const { shotStopping, tactical, determination, discipline, motivating } =
    coachingValues;
  let rating: number;

  const newValue =
    shotStopping * 8 +
    tactical * 3 +
    (determination + discipline + motivating) * 3;

  if (newValue >= 360) {
    rating = 5;
  } else if (newValue >= 320) {
    rating = 4.5;
  } else if (newValue >= 280) {
    rating = 4;
  } else if (newValue >= 240) {
    rating = 3.5;
  } else if (newValue >= 200) {
    rating = 3;
  } else if (newValue >= 160) {
    rating = 2.5;
  } else if (newValue >= 120) {
    rating = 2;
  } else if (newValue >= 80) {
    rating = 1.5;
  } else if (newValue >= 40) {
    rating = 1;
  } else {
    rating = 0.5;
  }

  return rating;
};

export const calculateGkHandRating = (coachingValues: CoachingValuesState) => {
  const {
    distribution,
    handling,
    technical,
    determination,
    discipline,
    motivating
  } = coachingValues;
  let rating: number;

  const newValue =
    ((distribution + handling) / 2) * 8 +
    technical * 3 +
    (determination + discipline + motivating) * 3;

  if (newValue >= 360) {
    rating = 5;
  } else if (newValue >= 320) {
    rating = 4.5;
  } else if (newValue >= 280) {
    rating = 4;
  } else if (newValue >= 240) {
    rating = 3.5;
  } else if (newValue >= 200) {
    rating = 3;
  } else if (newValue >= 160) {
    rating = 2.5;
  } else if (newValue >= 120) {
    rating = 2;
  } else if (newValue >= 80) {
    rating = 1.5;
  } else if (newValue >= 40) {
    rating = 1;
  } else {
    rating = 0.5;
  }

  return rating;
};

export const calculateDefTacRating = (coachingValues: CoachingValuesState) => {
  const { defending, tactical, determination, discipline, motivating } =
    coachingValues;
  let rating: number;

  const newValue =
    defending * 8 +
    tactical * 3 +
    (determination + discipline + motivating) * 3;

  if (newValue >= 360) {
    rating = 5;
  } else if (newValue >= 320) {
    rating = 4.5;
  } else if (newValue >= 280) {
    rating = 4;
  } else if (newValue >= 240) {
    rating = 3.5;
  } else if (newValue >= 200) {
    rating = 3;
  } else if (newValue >= 160) {
    rating = 2.5;
  } else if (newValue >= 120) {
    rating = 2;
  } else if (newValue >= 80) {
    rating = 1.5;
  } else if (newValue >= 40) {
    rating = 1;
  } else {
    rating = 0.5;
  }

  return rating;
};

export const calculateDefTechRating = (coachingValues: CoachingValuesState) => {
  const { defending, technical, determination, discipline, motivating } =
    coachingValues;
  let rating: number;

  const newValue =
    defending * 8 +
    technical * 3 +
    (determination + discipline + motivating) * 3;

  if (newValue >= 360) {
    rating = 5;
  } else if (newValue >= 320) {
    rating = 4.5;
  } else if (newValue >= 280) {
    rating = 4;
  } else if (newValue >= 240) {
    rating = 3.5;
  } else if (newValue >= 200) {
    rating = 3;
  } else if (newValue >= 160) {
    rating = 2.5;
  } else if (newValue >= 120) {
    rating = 2;
  } else if (newValue >= 80) {
    rating = 1.5;
  } else if (newValue >= 40) {
    rating = 1;
  } else {
    rating = 0.5;
  }

  return rating;
};

export const calculateAttTacRating = (coachingValues: CoachingValuesState) => {
  const { attacking, tactical, determination, discipline, motivating } =
    coachingValues;
  let rating: number;

  const newValue =
    attacking * 8 +
    tactical * 3 +
    (determination + discipline + motivating) * 3;

  if (newValue >= 360) {
    rating = 5;
  } else if (newValue >= 320) {
    rating = 4.5;
  } else if (newValue >= 280) {
    rating = 4;
  } else if (newValue >= 240) {
    rating = 3.5;
  } else if (newValue >= 200) {
    rating = 3;
  } else if (newValue >= 160) {
    rating = 2.5;
  } else if (newValue >= 120) {
    rating = 2;
  } else if (newValue >= 80) {
    rating = 1.5;
  } else if (newValue >= 40) {
    rating = 1;
  } else {
    rating = 0.5;
  }

  return rating;
};

export const calculateAttTechRating = (coachingValues: CoachingValuesState) => {
  const { attacking, technical, determination, discipline, motivating } =
    coachingValues;
  let rating: number;

  const newValue =
    attacking * 8 +
    technical * 3 +
    (determination + discipline + motivating) * 3;

  if (newValue >= 360) {
    rating = 5;
  } else if (newValue >= 320) {
    rating = 4.5;
  } else if (newValue >= 280) {
    rating = 4;
  } else if (newValue >= 240) {
    rating = 3.5;
  } else if (newValue >= 200) {
    rating = 3;
  } else if (newValue >= 160) {
    rating = 2.5;
  } else if (newValue >= 120) {
    rating = 2;
  } else if (newValue >= 80) {
    rating = 1.5;
  } else if (newValue >= 40) {
    rating = 1;
  } else {
    rating = 0.5;
  }

  return rating;
};

export const calculatePossTacRating = (coachingValues: CoachingValuesState) => {
  const { mental, tactical, determination, discipline, motivating } =
    coachingValues;
  let rating: number;

  const newValue =
    mental * 8 + tactical * 3 + (determination + discipline + motivating) * 3;

  if (newValue >= 360) {
    rating = 5;
  } else if (newValue >= 320) {
    rating = 4.5;
  } else if (newValue >= 280) {
    rating = 4;
  } else if (newValue >= 240) {
    rating = 3.5;
  } else if (newValue >= 200) {
    rating = 3;
  } else if (newValue >= 160) {
    rating = 2.5;
  } else if (newValue >= 120) {
    rating = 2;
  } else if (newValue >= 80) {
    rating = 1.5;
  } else if (newValue >= 40) {
    rating = 1;
  } else {
    rating = 0.5;
  }

  return rating;
};

export const calculatePossTechRating = (
  coachingValues: CoachingValuesState
) => {
  const { mental, technical, determination, discipline, motivating } =
    coachingValues;
  let rating: number;

  const newValue =
    mental * 8 + technical * 3 + (determination + discipline + motivating) * 3;

  if (newValue >= 360) {
    rating = 5;
  } else if (newValue >= 320) {
    rating = 4.5;
  } else if (newValue >= 280) {
    rating = 4;
  } else if (newValue >= 240) {
    rating = 3.5;
  } else if (newValue >= 200) {
    rating = 3;
  } else if (newValue >= 160) {
    rating = 2.5;
  } else if (newValue >= 120) {
    rating = 2;
  } else if (newValue >= 80) {
    rating = 1.5;
  } else if (newValue >= 40) {
    rating = 1;
  } else {
    rating = 0.5;
  }

  return rating;
};

export const calculateFitStrRating = (coachingValues: CoachingValuesState) => {
  const { fitness, determination, discipline, motivating } = coachingValues;
  let rating: number;

  const newValue = fitness * 9 + (determination + discipline + motivating) * 2;

  if (newValue >= 270) {
    rating = 5;
  } else if (newValue >= 240) {
    rating = 4.5;
  } else if (newValue >= 210) {
    rating = 4;
  } else if (newValue >= 180) {
    rating = 3.5;
  } else if (newValue >= 150) {
    rating = 3;
  } else if (newValue >= 120) {
    rating = 2.5;
  } else if (newValue >= 90) {
    rating = 2;
  } else if (newValue >= 60) {
    rating = 1.5;
  } else if (newValue >= 30) {
    rating = 1;
  } else {
    rating = 0.5;
  }

  return rating;
};

export const calculateFitQuickRating = (
  coachingValues: CoachingValuesState
) => {
  const { fitness, determination, discipline, motivating } = coachingValues;
  let rating: number;

  const newValue = fitness * 9 + (determination + discipline + motivating) * 2;

  if (newValue >= 270) {
    rating = 5;
  } else if (newValue >= 240) {
    rating = 4.5;
  } else if (newValue >= 210) {
    rating = 4;
  } else if (newValue >= 180) {
    rating = 3.5;
  } else if (newValue >= 150) {
    rating = 3;
  } else if (newValue >= 120) {
    rating = 2.5;
  } else if (newValue >= 90) {
    rating = 2;
  } else if (newValue >= 60) {
    rating = 1.5;
  } else if (newValue >= 30) {
    rating = 1;
  } else {
    rating = 0.5;
  }

  return rating;
};

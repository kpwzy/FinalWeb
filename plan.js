const plans = {
    weightLoss: {
      Monday: "Cardio (30 min) + Light Weights",
      Tuesday: "HIIT Workout",
      Wednesday: "Yoga or Active Rest",
      Thursday: "Treadmill Run (20 min) + Bodyweight Circuit",
      Friday: "Spinning Class",
      Saturday: "Outdoor Activity (Hike, Walk, etc)",
      Sunday: "Rest"
    },
    muscleGain: {
      Monday: "Chest + Triceps",
      Tuesday: "Back + Biceps",
      Wednesday: "Legs + Abs",
      Thursday: "Shoulders + Core",
      Friday: "Full Body Strength Training",
      Saturday: "Stretching + Mobility",
      Sunday: "Rest"
    },
    endurance: {
      Monday: "Cardio + Full Body Circuit",
      Tuesday: "Machine-Based Lower Body Endurance",
      Wednesday: "Moderate Cardio Day",
      Thursday: "HIIT (High Intensity Interval Training)",
      Friday: "Upper Body Endurance + Light Cardio",
      Saturday: "Mixed Cardio Endurance Challenge",
      Sunday: "Rest"
    }
  };
  
  function generatePlan() {
    const goal = document.getElementById("goalSelector").value;
    const container = document.getElementById("workoutPlan");
    container.innerHTML = "";
  
    if (!plans[goal]) {
      const div = document.createElement("div");
      div.className = "day-plan";
      div.innerHTML = "<p>Please select a goal.</p>";
      container.appendChild(div);
      return;
    }
  
    const weekPlan = plans[goal];
    for (const day in weekPlan) {
      const div = document.createElement("div");
      div.className = "day-plan";
      div.innerHTML = `<strong>${day}</strong>: ${weekPlan[day]}`;
      container.appendChild(div);
    }
  }
  
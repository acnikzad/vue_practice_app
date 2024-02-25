<template>
    <div>
      <select v-model="selectedYear">
        <option disabled value="">Select year</option>
        <option v-for="year in yearOptions" :key="year" :value="year">
            {{ year }}
        </option>
      </select>

      <select v-if="selectedYear" v-model="selectedMake">
        <option disabled value="">Select a make</option>
        <option v-for="make in makesWithModels" :key="make.make" :value="make.make">
          {{ make.make }}
        </option>
      </select>
  
      <select v-if="selectedMake" v-model="selectedModel">
        <option disabled value="">Select a model</option>
        <option v-for="model in selectedMakeModels" :key="model" :value="model">
          {{ model }}
        </option>
      </select>

      <select v-if="selectedModel" v-model="selectedCategory">
        <option disabled value="">Select a category</option>
        <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
        </option>
      </select>

      <select v-if="selectedCategory" v-model="selectedDrivetrain">
        <option disabled value="">Select a category</option>
        <option v-for="drivetrain in drivetrains" :key="drivetrain" :value="drivetrain">
            {{ drivetrain }}
        </option>
      </select>

    </div>
  </template>

<script>
export default {
    name: 'CarsApp',
    data() {
        return {
            cars: [],
            car: '',
            selectedYear: '',
            selectedMake: '',
            selectedModel: '',
            selectedCategory: '',
            mileage: '',
            selectedDrivetrain: '',
            yearOptions: Array.from({ length: (new Date().getFullYear() - 1990) + 1 }, (v, k) => 1990 + k),
            makesWithModels: [
                { make: "Audi", models: ["A4", "A6", "Q5", "Q7"] },
                { make: "BMW", models: ["3 Series", "5 Series", "X5", "X6"] },
                { make: "Chevrolet", models: ["Camaro", "Silverado", "Tahoe", "Malibu"] },
                { make: "Dodge", models: ["Charger", "Challenger", "Durango", "Ram"] },
                { make: "Ferrari", models: ["488 GTB", "Portofino", "Roma", "F8 Tributo"] },
                { make: "Ford", models: ["Mustang", "F-150", "Explorer", "Escape"] },
                { make: "General Motors", models: ["Chevrolet Bolt", "Cadillac CT5", "GMC Sierra", "Chevrolet Tahoe"] },
                { make: "Honda", models: ["Civic", "Accord", "CR-V", "Pilot"] },
                { make: "Hyundai", models: ["Elantra", "Sonata", "Tucson", "Santa Fe"] },
                { make: "Jaguar", models: ["F-TYPE", "XE", "XF", "I-PACE"] },
                { make: "Kia", models: ["Sorento", "Soul", "Optima", "Sportage"] },
                { make: "Lamborghini", models: ["Aventador", "Huracan", "Urus", "Sian FKP 37"] },
                { make: "Land Rover", models: ["Defender", "Discovery", "Range Rover", "Range Rover Sport"] },
                { make: "Lexus", models: ["RX", "ES", "NX", "LS"] },
                { make: "Mazda", models: ["CX-5", "Mazda3", "Mazda6", "CX-9"] },
                { make: "Mercedes-Benz", models: ["C-Class", "E-Class", "S-Class", "GLE"] },
                { make: "Nissan", models: ["Altima", "Rogue", "Sentra", "Pathfinder"] },
                { make: "Porsche", models: ["911", "Cayenne", "Macan", "Panamera"] },
                { make: "Subaru", models: ["Outback", "Forester", "Crosstrek", "Impreza"] },
                { make: "Tesla", models: ["Model S", "Model 3", "Model X", "Model Y"] },
                { make: "Toyota", models: ["Camry", "Corolla", "RAV4", "Highlander"] },
                { make: "Volkswagen", models: ["Golf", "Passat", "Tiguan", "Atlas"] },
                { make: "Volvo", models: ["XC90", "XC60", "S60", "V60"] }
            ],
            categories: [
                "Coupe",
                "SUV",
                "Wagon",
                "Sedan",
                "Sport",
                "Muscle",
                "Truck",
                "EV",
                "Hybrid",
                "Crossover"
            ],
            drivetrains: [
                "Automatic",
                "Manual",
                "CVT"
            ]

        }
    },
    methods: {
        addCar() {
            let newCar = {
                year: this.year,
                make: this.make,
                model: this.model,
                category: this.category,
                milleage: this.mileage,
                drivetrain: this.drivetrain,
            }
            this.cars.push(newCar),
            alert('Added a Car'),

            this.year = '',
            this.make = '',
            this.model = '',
            this.category = '',
            this.mileage = '',
            this.drivetrain = ''
        }

    },
    computed: {
        selectedMakeModels() {
            const make = this.makesWithModels.find(make => make.make === this.selectedMake);
            return make ? make.models : [];
        }
    }
}

</script>
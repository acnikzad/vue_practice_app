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
        <option disabled value="">Select a drivetrain</option>
        <option v-for="drivetrain in drivetrains" :key="drivetrain" :value="drivetrain">
            {{ drivetrain }}
        </option>
      </select>

      <div v-if="selectedDrivetrain">
        <button @click="addCar">Add car </button>
      </div>
    </div>
    <div v-for="car in cars" :key="car" :value="car" :style="getCategoryStyle(car.category)">
        <h4>Year: </h4><p>{{ car.year }}</p>
        <h4>Make: </h4><p>{{ car.make }}</p>
        <h4>Model: </h4><p>{{ car.model }}</p>
        <h4>Category: </h4><p>{{ car.category }}</p>
        <h4>Drivetrain: </h4><p>{{ car.drivetrain }}</p>
    </div>
    <div v-for="car in filteredAndSortedCars" :key="car.make + car.model">
        <p>{{ car.make }} {{ car.model }} - {{ car.category }} - {{ car.drivetrain }}</p>
    </div>
    <select v-model="filterCategory">
        <option value="">Filter by Category</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
    </select>

        <!-- Filtering by Drivetrain -->
    <select v-model="filterDrivetrain">
        <option value="">Filter by Drivetrain</option>
        <option v-for="drivetrain in drivetrains" :key="drivetrain" :value="drivetrain">{{ drivetrain }}</option>
    </select>

    <button @click="toggleSort">Toggle Sort</button>
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
            ],
            isSortedAsc: true, // Sorting direction flag
            filterCategory: '', // Selected filter for category
            filterDrivetrain: '', // Selected filter for drivetrain

        }
    },
    methods: {
        addCar() {
            let newCar = {
                year: this.selectedYear,
                make: this.selectedMake,
                model: this.selectedModel,
                category: this.selectedCategory,
                milleage: this.selectedMileage,
                drivetrain: this.selectedDrivetrain,
            }
            this.cars.push(newCar),
            alert('Added a Car'),

            this.year = '',
            this.make = '',
            this.model = '',
            this.category = '',
            this.mileage = '',
            this.drivetrain = ''
        }, 

        toggleSort() {
            this.isSortedAsc = !this.isSortedAsc;
        },

        getCategoryStyle(category) {
            const styles = {
                Coupe: { backgroundColor: 'lightblue' },
                SUV: { backgroundColor: 'lightgreen' },
                Wagon: { backgroundColor: 'lightcoral' },
                Truck:  { backgroundColor: 'lightsalmon' },
                Hybrid: { backgroundColor: 'lightgray'},
                EV: { backgroundColor: 'lightgreen'}
            }
            return styles[category] || {};
        }
    },
    computed: {
        selectedMakeModels() {
            const make = this.makesWithModels.find(make => make.make === this.selectedMake);
            return make ? make.models : [];
        },

        filteredAndSortedCars() {
            let result = this.cars;

            // Filter by category if selected
            if (this.filterCategory) {
            result = result.filter(car => car.category === this.filterCategory);
            }

            // Filter by drivetrain if selected
            if (this.filterDrivetrain) {
            result = result.filter(car => car.drivetrain === this.filterDrivetrain);
            }

            // Sort based on the flag
            result.sort((a, b) => {
            if (this.isSortedAsc) {
                return a.make.localeCompare(b.make); // Sort by make asc
            } else {
                return b.make.localeCompare(a.make); // Sort by make desc
            }
            });

            return result;
        }
    }
}

</script>
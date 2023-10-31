interface CarInfo {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function storeCarInfo(manufacturer: string, model: string, ...extras: any[]): CarInfo {
    let car: CarInfo = {
        manufacturer: manufacturer,
        model: model
    };

    for (let extra of extras) {
        if (typeof extra === "object") {
            car = { ...car, ...extra };
        }
    }

    return car;
}

// Calling the function with car information and additional features
let carInfo = storeCarInfo("Toyota", "Camry", { color: "Blue", year: 2022 }, "Sunroof");

// Printing the car information
console.log(carInfo);

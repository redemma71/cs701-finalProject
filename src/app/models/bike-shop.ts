export class BikeShop {

  name:           string;
  address:  {
    street:       string;
    city:         string;
    state:        string;
    zip:          number;
    full?:        string;
  };
  coords?: {
    lat:         number;
    lng:        number;
  };
  phone:          number;
  hours?:    {
    monday:       string;
    tuesday:      string;
    wednesday:    string;
    thursday:     string;
    friday:       string;
    saturday:     string;
    sunday:       string;
  };
}

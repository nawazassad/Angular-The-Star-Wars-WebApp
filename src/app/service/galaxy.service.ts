import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Starship } from '../interface/starship.interface';
import { StarshipResult } from '../interface/starshipResult.interface';

@Injectable({
  providedIn: 'root',
})
export class GalaxyService {
  baseUrl = 'http://swapi.dev/api/starships/';
  error = 'The distance should be greater than zero';

  constructor(private http: HttpClient) {}

  // Converting the Year,Month, Week and Day in to Hours
  year = 365 * 24;
  month = 30 * 24;
  week = 7 * 24;
  day = 1 * 24;

  //Retrieving the Stops Required for resupply
  public calculatedStops(distance) {
    return new Promise((resolve, reject) => {
      this.getAllBattleShips(this.baseUrl, [], resolve, reject);
    }).then((res) => {
      let battleShip: Starship[] = [].concat(res);
      let battleShipList = [];
      battleShip.forEach((res) => {
        battleShipList.push({
          name: res.name,
          model: res.model,
          stops: this.stopsPerShip(distance, res),
          consumables: res.consumables,
        });
      });
      return battleShipList;
    });
  }

  // Retreiving all the ships from the api
  private getAllBattleShips = (url, battleShip, resolve, reject) => {
    this.http.get<StarshipResult>(url).subscribe(
      (res) => {
        const allBattleShips = battleShip.concat(res.results);
        if (res.next! == null) {
          this.getAllBattleShips(res.next, allBattleShips, resolve, reject);
        } else {
          resolve(allBattleShips);
        }
      },
      (error) => {
        reject('Something went Wrong');
      }
    );
  };

  // Calculating the number of stops required by each ship for resupply
  private stopsPerShip(distance, element) {
    if (distance == String) {
      return this.error;
    }

    if (element.consumables == 'unknown' || element.MGLT == 'unknown') {
      return 'Unknown';
    } else {
      let stopsPerSip =
        distance / element.MGLT / this.provisionPerShip(element.consumables);

      return ~~stopsPerSip;
    }
  }

  // Calculate the hours a ship need to carry the provision
  private provisionPerShip(time: String) {
    let timeStamp;
    let term;
    let provisions;

    if (time !== 'unknown') {
      timeStamp = time.split('')[2];
      term = time.split('')[0];
    }

    switch (timeStamp) {
      case 'y':
        provisions = this.year * term;
        break;

      case 'm':
        provisions = this.month * term;
        break;

      case 'w':
        provisions = this.week * term;
        break;

      case 'd':
        provisions = this.day * term;
        break;

      default:
        break;
    }
    return provisions;
  }
}

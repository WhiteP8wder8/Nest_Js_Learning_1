import { DataSource } from 'typeorm';
import { CoffeeRefactor1752674807190 } from './src/migrations/1752674807190-CoffeeRefactor';
import { Coffee } from './src/coffees/entities/coffee.entity';
import { Flavor } from './src/coffees/entities/flavor.entity/flavor.entity';
import { SchemaSync1752675507906 } from './src/migrations/1752675507906-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '09092008s',
  database: 'nest_test_db',
  entities: [Coffee, Flavor],
  migrations: [CoffeeRefactor1752674807190, SchemaSync1752675507906],
});

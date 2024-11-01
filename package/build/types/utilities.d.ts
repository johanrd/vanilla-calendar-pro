import type { FormatDateString } from '@src/types';
export declare const parseDates: (dates: string[]) => (`${number}-02-02` | `${number}-02-01` | `${number}-02-03` | `${number}-02-04` | `${number}-02-05` | `${number}-02-06` | `${number}-02-07` | `${number}-02-08` | `${number}-02-09` | `${number}-02-20` | `${number}-02-22` | `${number}-02-21` | `${number}-02-23` | `${number}-02-24` | `${number}-02-25` | `${number}-02-26` | `${number}-02-27` | `${number}-02-28` | `${number}-02-29` | `${number}-02-10` | `${number}-02-12` | `${number}-02-11` | `${number}-02-13` | `${number}-02-14` | `${number}-02-15` | `${number}-02-16` | `${number}-02-17` | `${number}-02-18` | `${number}-02-19` | `${number}-02-30` | `${number}-02-31` | `${number}-01-02` | `${number}-01-01` | `${number}-01-03` | `${number}-01-04` | `${number}-01-05` | `${number}-01-06` | `${number}-01-07` | `${number}-01-08` | `${number}-01-09` | `${number}-01-20` | `${number}-01-22` | `${number}-01-21` | `${number}-01-23` | `${number}-01-24` | `${number}-01-25` | `${number}-01-26` | `${number}-01-27` | `${number}-01-28` | `${number}-01-29` | `${number}-01-10` | `${number}-01-12` | `${number}-01-11` | `${number}-01-13` | `${number}-01-14` | `${number}-01-15` | `${number}-01-16` | `${number}-01-17` | `${number}-01-18` | `${number}-01-19` | `${number}-01-30` | `${number}-01-31` | `${number}-03-02` | `${number}-03-01` | `${number}-03-03` | `${number}-03-04` | `${number}-03-05` | `${number}-03-06` | `${number}-03-07` | `${number}-03-08` | `${number}-03-09` | `${number}-03-20` | `${number}-03-22` | `${number}-03-21` | `${number}-03-23` | `${number}-03-24` | `${number}-03-25` | `${number}-03-26` | `${number}-03-27` | `${number}-03-28` | `${number}-03-29` | `${number}-03-10` | `${number}-03-12` | `${number}-03-11` | `${number}-03-13` | `${number}-03-14` | `${number}-03-15` | `${number}-03-16` | `${number}-03-17` | `${number}-03-18` | `${number}-03-19` | `${number}-03-30` | `${number}-03-31` | `${number}-04-02` | `${number}-04-01` | `${number}-04-03` | `${number}-04-04` | `${number}-04-05` | `${number}-04-06` | `${number}-04-07` | `${number}-04-08` | `${number}-04-09` | `${number}-04-20` | `${number}-04-22` | `${number}-04-21` | `${number}-04-23` | `${number}-04-24` | `${number}-04-25` | `${number}-04-26` | `${number}-04-27` | `${number}-04-28` | `${number}-04-29` | `${number}-04-10` | `${number}-04-12` | `${number}-04-11` | `${number}-04-13` | `${number}-04-14` | `${number}-04-15` | `${number}-04-16` | `${number}-04-17` | `${number}-04-18` | `${number}-04-19` | `${number}-04-30` | `${number}-04-31` | `${number}-05-02` | `${number}-05-01` | `${number}-05-03` | `${number}-05-04` | `${number}-05-05` | `${number}-05-06` | `${number}-05-07` | `${number}-05-08` | `${number}-05-09` | `${number}-05-20` | `${number}-05-22` | `${number}-05-21` | `${number}-05-23` | `${number}-05-24` | `${number}-05-25` | `${number}-05-26` | `${number}-05-27` | `${number}-05-28` | `${number}-05-29` | `${number}-05-10` | `${number}-05-12` | `${number}-05-11` | `${number}-05-13` | `${number}-05-14` | `${number}-05-15` | `${number}-05-16` | `${number}-05-17` | `${number}-05-18` | `${number}-05-19` | `${number}-05-30` | `${number}-05-31` | `${number}-06-02` | `${number}-06-01` | `${number}-06-03` | `${number}-06-04` | `${number}-06-05` | `${number}-06-06` | `${number}-06-07` | `${number}-06-08` | `${number}-06-09` | `${number}-06-20` | `${number}-06-22` | `${number}-06-21` | `${number}-06-23` | `${number}-06-24` | `${number}-06-25` | `${number}-06-26` | `${number}-06-27` | `${number}-06-28` | `${number}-06-29` | `${number}-06-10` | `${number}-06-12` | `${number}-06-11` | `${number}-06-13` | `${number}-06-14` | `${number}-06-15` | `${number}-06-16` | `${number}-06-17` | `${number}-06-18` | `${number}-06-19` | `${number}-06-30` | `${number}-06-31` | `${number}-07-02` | `${number}-07-01` | `${number}-07-03` | `${number}-07-04` | `${number}-07-05` | `${number}-07-06` | `${number}-07-07` | `${number}-07-08` | `${number}-07-09` | `${number}-07-20` | `${number}-07-22` | `${number}-07-21` | `${number}-07-23` | `${number}-07-24` | `${number}-07-25` | `${number}-07-26` | `${number}-07-27` | `${number}-07-28` | `${number}-07-29` | `${number}-07-10` | `${number}-07-12` | `${number}-07-11` | `${number}-07-13` | `${number}-07-14` | `${number}-07-15` | `${number}-07-16` | `${number}-07-17` | `${number}-07-18` | `${number}-07-19` | `${number}-07-30` | `${number}-07-31` | `${number}-08-02` | `${number}-08-01` | `${number}-08-03` | `${number}-08-04` | `${number}-08-05` | `${number}-08-06` | `${number}-08-07` | `${number}-08-08` | `${number}-08-09` | `${number}-08-20` | `${number}-08-22` | `${number}-08-21` | `${number}-08-23` | `${number}-08-24` | `${number}-08-25` | `${number}-08-26` | `${number}-08-27` | `${number}-08-28` | `${number}-08-29` | `${number}-08-10` | `${number}-08-12` | `${number}-08-11` | `${number}-08-13` | `${number}-08-14` | `${number}-08-15` | `${number}-08-16` | `${number}-08-17` | `${number}-08-18` | `${number}-08-19` | `${number}-08-30` | `${number}-08-31` | `${number}-09-02` | `${number}-09-01` | `${number}-09-03` | `${number}-09-04` | `${number}-09-05` | `${number}-09-06` | `${number}-09-07` | `${number}-09-08` | `${number}-09-09` | `${number}-09-20` | `${number}-09-22` | `${number}-09-21` | `${number}-09-23` | `${number}-09-24` | `${number}-09-25` | `${number}-09-26` | `${number}-09-27` | `${number}-09-28` | `${number}-09-29` | `${number}-09-10` | `${number}-09-12` | `${number}-09-11` | `${number}-09-13` | `${number}-09-14` | `${number}-09-15` | `${number}-09-16` | `${number}-09-17` | `${number}-09-18` | `${number}-09-19` | `${number}-09-30` | `${number}-09-31` | `${number}-10-02` | `${number}-10-01` | `${number}-10-03` | `${number}-10-04` | `${number}-10-05` | `${number}-10-06` | `${number}-10-07` | `${number}-10-08` | `${number}-10-09` | `${number}-10-20` | `${number}-10-22` | `${number}-10-21` | `${number}-10-23` | `${number}-10-24` | `${number}-10-25` | `${number}-10-26` | `${number}-10-27` | `${number}-10-28` | `${number}-10-29` | `${number}-10-10` | `${number}-10-12` | `${number}-10-11` | `${number}-10-13` | `${number}-10-14` | `${number}-10-15` | `${number}-10-16` | `${number}-10-17` | `${number}-10-18` | `${number}-10-19` | `${number}-10-30` | `${number}-10-31` | `${number}-11-02` | `${number}-11-01` | `${number}-11-03` | `${number}-11-04` | `${number}-11-05` | `${number}-11-06` | `${number}-11-07` | `${number}-11-08` | `${number}-11-09` | `${number}-11-20` | `${number}-11-22` | `${number}-11-21` | `${number}-11-23` | `${number}-11-24` | `${number}-11-25` | `${number}-11-26` | `${number}-11-27` | `${number}-11-28` | `${number}-11-29` | `${number}-11-10` | `${number}-11-12` | `${number}-11-11` | `${number}-11-13` | `${number}-11-14` | `${number}-11-15` | `${number}-11-16` | `${number}-11-17` | `${number}-11-18` | `${number}-11-19` | `${number}-11-30` | `${number}-11-31` | `${number}-12-02` | `${number}-12-01` | `${number}-12-03` | `${number}-12-04` | `${number}-12-05` | `${number}-12-06` | `${number}-12-07` | `${number}-12-08` | `${number}-12-09` | `${number}-12-20` | `${number}-12-22` | `${number}-12-21` | `${number}-12-23` | `${number}-12-24` | `${number}-12-25` | `${number}-12-26` | `${number}-12-27` | `${number}-12-28` | `${number}-12-29` | `${number}-12-10` | `${number}-12-12` | `${number}-12-11` | `${number}-12-13` | `${number}-12-14` | `${number}-12-15` | `${number}-12-16` | `${number}-12-17` | `${number}-12-18` | `${number}-12-19` | `${number}-12-30` | `${number}-12-31`)[];
export declare const getDateString: (date: Date) => `${number}-02-02` | `${number}-02-01` | `${number}-02-03` | `${number}-02-04` | `${number}-02-05` | `${number}-02-06` | `${number}-02-07` | `${number}-02-08` | `${number}-02-09` | `${number}-02-20` | `${number}-02-22` | `${number}-02-21` | `${number}-02-23` | `${number}-02-24` | `${number}-02-25` | `${number}-02-26` | `${number}-02-27` | `${number}-02-28` | `${number}-02-29` | `${number}-02-10` | `${number}-02-12` | `${number}-02-11` | `${number}-02-13` | `${number}-02-14` | `${number}-02-15` | `${number}-02-16` | `${number}-02-17` | `${number}-02-18` | `${number}-02-19` | `${number}-02-30` | `${number}-02-31` | `${number}-01-02` | `${number}-01-01` | `${number}-01-03` | `${number}-01-04` | `${number}-01-05` | `${number}-01-06` | `${number}-01-07` | `${number}-01-08` | `${number}-01-09` | `${number}-01-20` | `${number}-01-22` | `${number}-01-21` | `${number}-01-23` | `${number}-01-24` | `${number}-01-25` | `${number}-01-26` | `${number}-01-27` | `${number}-01-28` | `${number}-01-29` | `${number}-01-10` | `${number}-01-12` | `${number}-01-11` | `${number}-01-13` | `${number}-01-14` | `${number}-01-15` | `${number}-01-16` | `${number}-01-17` | `${number}-01-18` | `${number}-01-19` | `${number}-01-30` | `${number}-01-31` | `${number}-03-02` | `${number}-03-01` | `${number}-03-03` | `${number}-03-04` | `${number}-03-05` | `${number}-03-06` | `${number}-03-07` | `${number}-03-08` | `${number}-03-09` | `${number}-03-20` | `${number}-03-22` | `${number}-03-21` | `${number}-03-23` | `${number}-03-24` | `${number}-03-25` | `${number}-03-26` | `${number}-03-27` | `${number}-03-28` | `${number}-03-29` | `${number}-03-10` | `${number}-03-12` | `${number}-03-11` | `${number}-03-13` | `${number}-03-14` | `${number}-03-15` | `${number}-03-16` | `${number}-03-17` | `${number}-03-18` | `${number}-03-19` | `${number}-03-30` | `${number}-03-31` | `${number}-04-02` | `${number}-04-01` | `${number}-04-03` | `${number}-04-04` | `${number}-04-05` | `${number}-04-06` | `${number}-04-07` | `${number}-04-08` | `${number}-04-09` | `${number}-04-20` | `${number}-04-22` | `${number}-04-21` | `${number}-04-23` | `${number}-04-24` | `${number}-04-25` | `${number}-04-26` | `${number}-04-27` | `${number}-04-28` | `${number}-04-29` | `${number}-04-10` | `${number}-04-12` | `${number}-04-11` | `${number}-04-13` | `${number}-04-14` | `${number}-04-15` | `${number}-04-16` | `${number}-04-17` | `${number}-04-18` | `${number}-04-19` | `${number}-04-30` | `${number}-04-31` | `${number}-05-02` | `${number}-05-01` | `${number}-05-03` | `${number}-05-04` | `${number}-05-05` | `${number}-05-06` | `${number}-05-07` | `${number}-05-08` | `${number}-05-09` | `${number}-05-20` | `${number}-05-22` | `${number}-05-21` | `${number}-05-23` | `${number}-05-24` | `${number}-05-25` | `${number}-05-26` | `${number}-05-27` | `${number}-05-28` | `${number}-05-29` | `${number}-05-10` | `${number}-05-12` | `${number}-05-11` | `${number}-05-13` | `${number}-05-14` | `${number}-05-15` | `${number}-05-16` | `${number}-05-17` | `${number}-05-18` | `${number}-05-19` | `${number}-05-30` | `${number}-05-31` | `${number}-06-02` | `${number}-06-01` | `${number}-06-03` | `${number}-06-04` | `${number}-06-05` | `${number}-06-06` | `${number}-06-07` | `${number}-06-08` | `${number}-06-09` | `${number}-06-20` | `${number}-06-22` | `${number}-06-21` | `${number}-06-23` | `${number}-06-24` | `${number}-06-25` | `${number}-06-26` | `${number}-06-27` | `${number}-06-28` | `${number}-06-29` | `${number}-06-10` | `${number}-06-12` | `${number}-06-11` | `${number}-06-13` | `${number}-06-14` | `${number}-06-15` | `${number}-06-16` | `${number}-06-17` | `${number}-06-18` | `${number}-06-19` | `${number}-06-30` | `${number}-06-31` | `${number}-07-02` | `${number}-07-01` | `${number}-07-03` | `${number}-07-04` | `${number}-07-05` | `${number}-07-06` | `${number}-07-07` | `${number}-07-08` | `${number}-07-09` | `${number}-07-20` | `${number}-07-22` | `${number}-07-21` | `${number}-07-23` | `${number}-07-24` | `${number}-07-25` | `${number}-07-26` | `${number}-07-27` | `${number}-07-28` | `${number}-07-29` | `${number}-07-10` | `${number}-07-12` | `${number}-07-11` | `${number}-07-13` | `${number}-07-14` | `${number}-07-15` | `${number}-07-16` | `${number}-07-17` | `${number}-07-18` | `${number}-07-19` | `${number}-07-30` | `${number}-07-31` | `${number}-08-02` | `${number}-08-01` | `${number}-08-03` | `${number}-08-04` | `${number}-08-05` | `${number}-08-06` | `${number}-08-07` | `${number}-08-08` | `${number}-08-09` | `${number}-08-20` | `${number}-08-22` | `${number}-08-21` | `${number}-08-23` | `${number}-08-24` | `${number}-08-25` | `${number}-08-26` | `${number}-08-27` | `${number}-08-28` | `${number}-08-29` | `${number}-08-10` | `${number}-08-12` | `${number}-08-11` | `${number}-08-13` | `${number}-08-14` | `${number}-08-15` | `${number}-08-16` | `${number}-08-17` | `${number}-08-18` | `${number}-08-19` | `${number}-08-30` | `${number}-08-31` | `${number}-09-02` | `${number}-09-01` | `${number}-09-03` | `${number}-09-04` | `${number}-09-05` | `${number}-09-06` | `${number}-09-07` | `${number}-09-08` | `${number}-09-09` | `${number}-09-20` | `${number}-09-22` | `${number}-09-21` | `${number}-09-23` | `${number}-09-24` | `${number}-09-25` | `${number}-09-26` | `${number}-09-27` | `${number}-09-28` | `${number}-09-29` | `${number}-09-10` | `${number}-09-12` | `${number}-09-11` | `${number}-09-13` | `${number}-09-14` | `${number}-09-15` | `${number}-09-16` | `${number}-09-17` | `${number}-09-18` | `${number}-09-19` | `${number}-09-30` | `${number}-09-31` | `${number}-10-02` | `${number}-10-01` | `${number}-10-03` | `${number}-10-04` | `${number}-10-05` | `${number}-10-06` | `${number}-10-07` | `${number}-10-08` | `${number}-10-09` | `${number}-10-20` | `${number}-10-22` | `${number}-10-21` | `${number}-10-23` | `${number}-10-24` | `${number}-10-25` | `${number}-10-26` | `${number}-10-27` | `${number}-10-28` | `${number}-10-29` | `${number}-10-10` | `${number}-10-12` | `${number}-10-11` | `${number}-10-13` | `${number}-10-14` | `${number}-10-15` | `${number}-10-16` | `${number}-10-17` | `${number}-10-18` | `${number}-10-19` | `${number}-10-30` | `${number}-10-31` | `${number}-11-02` | `${number}-11-01` | `${number}-11-03` | `${number}-11-04` | `${number}-11-05` | `${number}-11-06` | `${number}-11-07` | `${number}-11-08` | `${number}-11-09` | `${number}-11-20` | `${number}-11-22` | `${number}-11-21` | `${number}-11-23` | `${number}-11-24` | `${number}-11-25` | `${number}-11-26` | `${number}-11-27` | `${number}-11-28` | `${number}-11-29` | `${number}-11-10` | `${number}-11-12` | `${number}-11-11` | `${number}-11-13` | `${number}-11-14` | `${number}-11-15` | `${number}-11-16` | `${number}-11-17` | `${number}-11-18` | `${number}-11-19` | `${number}-11-30` | `${number}-11-31` | `${number}-12-02` | `${number}-12-01` | `${number}-12-03` | `${number}-12-04` | `${number}-12-05` | `${number}-12-06` | `${number}-12-07` | `${number}-12-08` | `${number}-12-09` | `${number}-12-20` | `${number}-12-22` | `${number}-12-21` | `${number}-12-23` | `${number}-12-24` | `${number}-12-25` | `${number}-12-26` | `${number}-12-27` | `${number}-12-28` | `${number}-12-29` | `${number}-12-10` | `${number}-12-12` | `${number}-12-11` | `${number}-12-13` | `${number}-12-14` | `${number}-12-15` | `${number}-12-16` | `${number}-12-17` | `${number}-12-18` | `${number}-12-19` | `${number}-12-30` | `${number}-12-31`;
export declare const getDate: (date: FormatDateString) => Date;

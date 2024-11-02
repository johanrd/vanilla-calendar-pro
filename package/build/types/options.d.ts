import { VanillaCalendarPro } from './index';
import { FormatDateString, Labels, Layouts, Locale, MonthsCount, Popups, Range, Styles, ToggleSelected, TypesCalendar, WeekDayID, WeekDays } from './types';
export default class OptionsCalendar {
    viewType: TypesCalendar;
    isInput: boolean;
    positionToInput: 'auto' | 'center' | 'left' | 'right' | ['bottom' | 'top', 'center' | 'left' | 'right'];
    firstWeekday: WeekDayID;
    monthsToSwitch: number;
    themeAttrDetect: string | false;
    locale: Locale;
    dateToday: Date;
    dateMin: FormatDateString | 'today';
    dateMax: FormatDateString | 'today';
    displayMonthsCount: MonthsCount;
    displayDateMin: FormatDateString | 'today';
    displayDateMax: FormatDateString | 'today';
    displayDatesOutside: boolean;
    displayDisabledDates: boolean;
    disableDates: Array<Date | number | string>;
    disableAllDates: boolean;
    disableDatesPast: boolean;
    disableDatesGaps: boolean;
    disableWeekdays: number[];
    disableToday: boolean;
    enableDates: Array<Date | number | string>;
    enableEdgeDatesOnly: boolean;
    enableDateToggle: ToggleSelected;
    enableWeekNumbers: boolean;
    enableMonthChangeOnDayClick: boolean;
    enableJumpToSelectedDate: boolean;
    selectionDatesMode: false | 'single' | 'multiple' | 'multiple-ranged';
    selectionMonthsMode: boolean | 'only-arrows';
    selectionYearsMode: boolean | 'only-arrows';
    selectionTimeMode: false | 12 | 24;
    selectedDates: Array<Date | number | string>;
    selectedMonth: number;
    selectedYear: number;
    selectedHolidays: Array<Date | number | string>;
    selectedWeekends: WeekDays<WeekDayID>;
    selectedTime: string;
    selectedTheme: 'light' | 'dark' | 'system' | string;
    timeMinHour: Range<24>;
    timeMaxHour: Range<24>;
    timeMinMinute: Range<60>;
    timeMaxMinute: Range<60>;
    timeControls: 'all' | 'range';
    timeStepHour: number;
    timeStepMinute: number;
    sanitizerHTML: (dirtyHtml: string) => string;
    onClickDate: (e: MouseEvent, self: VanillaCalendarPro) => void;
    onClickWeekDay: (e: MouseEvent, day: number, days: HTMLElement[], self: VanillaCalendarPro) => void;
    onClickWeekNumber: (e: MouseEvent, number: number, days: HTMLElement[], year: number, self: VanillaCalendarPro) => void;
    onClickTitle: (e: MouseEvent, self: VanillaCalendarPro) => void;
    onClickMonth: (e: MouseEvent, self: VanillaCalendarPro) => void;
    onClickYear: (e: MouseEvent, self: VanillaCalendarPro) => void;
    onClickArrow: (e: MouseEvent, self: VanillaCalendarPro) => void;
    onChangeTime: (e: Event, self: VanillaCalendarPro, isError: boolean) => void;
    onChangeToInput: (e: Event, self: VanillaCalendarPro) => void;
    onInit: (self: VanillaCalendarPro) => void;
    onUpdate: (self: VanillaCalendarPro) => void;
    onDestroy: (self: VanillaCalendarPro) => void;
    onShow: (self: VanillaCalendarPro) => void;
    onHide: (self: VanillaCalendarPro) => void;
    popups: Popups;
    labels: Labels;
    layouts: Layouts;
    styles: Styles;
}
import type { IReset } from '@package/types';
import create from '@scripts/creators/create';
import handleDayRangedSelection from '@scripts/handles/handleSelectDateRange';
import initAllVariables from '@scripts/utils/initVariables/initAllVariables';
import type VanillaCalendar from '@src/vanilla-calendar';

const reset = (self: VanillaCalendar, { year, month, dates, time, locale }: IReset = {}) => {
  const previousSelected = { ...self.settings.selected };

  self.settings.selected.year = year ? previousSelected.year : self.selectedYear;
  self.settings.selected.month = month ? previousSelected.month : self.selectedMonth;
  self.settings.selected.time = time ? previousSelected.time : self.selectedTime;

  self.settings.selected.dates =
    dates === 'only-first' && self.private.selectedDates?.[0]
      ? [self.private.selectedDates[0]]
      : dates === true
        ? previousSelected.dates
        : self.private.selectedDates;

  if (locale) {
    self.private.locale = {
      months: { short: [], long: [] },
      weekdays: { short: [], long: [] },
    };
  }

  initAllVariables(self);
  create(self);

  self.settings.selected = previousSelected;
  if (self.settings.selection.day === 'multiple-ranged' && dates) handleDayRangedSelection(self);
};

export default reset;

// Type definitions for react-flatpickr 3.7
// Project: https://github.com/coderhaoxin/react-flatpickr
// Definitions by: begincalendar <https://github.com/begincalendar>
//                 snaveevans <https://github.com/snaveevans>
//                 rigothedev <https://github.com/rigothedev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { Component } from "react";
import flatpickr from "flatpickr";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface DateTimePickerProps extends Omit<Partial<HTMLInputElement>, 'value'> {
    defaultValue?: string;
    options?: flatpickr.Options.Options;
    onChange?: flatpickr.Options.Hook;
    onOpen?: flatpickr.Options.Hook;
    onClose?: flatpickr.Options.Hook;
    onMonthChange?: flatpickr.Options.Hook;
    onYearChange?: flatpickr.Options.Hook;
    onReady?: flatpickr.Options.Hook;
    onValueUpdate?: flatpickr.Options.Hook;
    onDayCreate?: flatpickr.Options.Hook;
    value?: string | Date | number | ReadonlyArray<string | Date | number>;
    className?: string;
}

export default class DatePicker extends Component<DateTimePickerProps> {}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Container Class for the Web API. Conatinas the MeterValues in the Past
**/
export declare class DeviceInPast extends SpeakeasyBase {
    counterReading?: number;
    counterReadingExport?: number;
    counterReadingExportT1?: number;
    counterReadingExportT2?: number;
    counterReadingExportT3?: number;
    counterReadingExportT4?: number;
    counterReadingImport?: number;
    counterReadingImportT1?: number;
    counterReadingImportT2?: number;
    counterReadingImportT3?: number;
    counterReadingImportT4?: number;
    counterReadingT1?: number;
    counterReadingT2?: number;
    counterReadingT3?: number;
    counterReadingT4?: number;
    counterReadingUnit?: string;
    date?: Date;
    id?: string;
    serial?: number;
}

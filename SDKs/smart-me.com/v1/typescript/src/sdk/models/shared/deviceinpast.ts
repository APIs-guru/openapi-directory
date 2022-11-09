import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceInPast
/** 
 * Container Class for the Web API. Conatinas the MeterValues in the Past
**/
export class DeviceInPast extends SpeakeasyBase {
  @Metadata({ data: "json, name=CounterReading" })
  counterReading?: number;

  @Metadata({ data: "json, name=CounterReadingExport" })
  counterReadingExport?: number;

  @Metadata({ data: "json, name=CounterReadingExportT1" })
  counterReadingExportT1?: number;

  @Metadata({ data: "json, name=CounterReadingExportT2" })
  counterReadingExportT2?: number;

  @Metadata({ data: "json, name=CounterReadingExportT3" })
  counterReadingExportT3?: number;

  @Metadata({ data: "json, name=CounterReadingExportT4" })
  counterReadingExportT4?: number;

  @Metadata({ data: "json, name=CounterReadingImport" })
  counterReadingImport?: number;

  @Metadata({ data: "json, name=CounterReadingImportT1" })
  counterReadingImportT1?: number;

  @Metadata({ data: "json, name=CounterReadingImportT2" })
  counterReadingImportT2?: number;

  @Metadata({ data: "json, name=CounterReadingImportT3" })
  counterReadingImportT3?: number;

  @Metadata({ data: "json, name=CounterReadingImportT4" })
  counterReadingImportT4?: number;

  @Metadata({ data: "json, name=CounterReadingT1" })
  counterReadingT1?: number;

  @Metadata({ data: "json, name=CounterReadingT2" })
  counterReadingT2?: number;

  @Metadata({ data: "json, name=CounterReadingT3" })
  counterReadingT3?: number;

  @Metadata({ data: "json, name=CounterReadingT4" })
  counterReadingT4?: number;

  @Metadata({ data: "json, name=CounterReadingUnit" })
  counterReadingUnit?: string;

  @Metadata({ data: "json, name=Date" })
  date?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Serial" })
  serial?: number;
}

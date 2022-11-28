import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceInPast
/** 
 * Container Class for the Web API. Conatinas the MeterValues in the Past
**/
export class DeviceInPast extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CounterReading" })
  counterReading?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingExport" })
  counterReadingExport?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingExportT1" })
  counterReadingExportT1?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingExportT2" })
  counterReadingExportT2?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingExportT3" })
  counterReadingExportT3?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingExportT4" })
  counterReadingExportT4?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingImport" })
  counterReadingImport?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingImportT1" })
  counterReadingImportT1?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingImportT2" })
  counterReadingImportT2?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingImportT3" })
  counterReadingImportT3?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingImportT4" })
  counterReadingImportT4?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingT1" })
  counterReadingT1?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingT2" })
  counterReadingT2?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingT3" })
  counterReadingT3?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingT4" })
  counterReadingT4?: number;

  @SpeakeasyMetadata({ data: "json, name=CounterReadingUnit" })
  counterReadingUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=Date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Serial" })
  serial?: number;
}

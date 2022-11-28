import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DatasetColumnsPut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column_name" })
  columnName: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=expression" })
  expression?: string;

  @SpeakeasyMetadata({ data: "json, name=filterable" })
  filterable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=groupby" })
  groupby?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_dttm" })
  isDttm?: boolean;

  @SpeakeasyMetadata({ data: "json, name=python_date_format" })
  pythonDateFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;

  @SpeakeasyMetadata({ data: "json, name=verbose_name" })
  verboseName?: string;
}

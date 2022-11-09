import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DatasetColumnsPut extends SpeakeasyBase {
  @Metadata({ data: "json, name=column_name" })
  columnName: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=expression" })
  expression?: string;

  @Metadata({ data: "json, name=filterable" })
  filterable?: boolean;

  @Metadata({ data: "json, name=groupby" })
  groupby?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @Metadata({ data: "json, name=is_dttm" })
  isDttm?: boolean;

  @Metadata({ data: "json, name=python_date_format" })
  pythonDateFormat?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;

  @Metadata({ data: "json, name=verbose_name" })
  verboseName?: string;
}

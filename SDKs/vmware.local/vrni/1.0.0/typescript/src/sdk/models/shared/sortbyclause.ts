import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SortByClauseOrderEnum {
    Asc = "ASC"
,    Desc = "DESC"
}


export class SortByClause extends SpeakeasyBase {
  @Metadata({ data: "json, name=field" })
  field?: string;

  @Metadata({ data: "json, name=order" })
  order?: SortByClauseOrderEnum;
}

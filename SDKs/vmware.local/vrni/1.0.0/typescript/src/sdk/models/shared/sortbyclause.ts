import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SortByClauseOrderEnum {
    Asc = "ASC",
    Desc = "DESC"
}


export class SortByClause extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: SortByClauseOrderEnum;
}

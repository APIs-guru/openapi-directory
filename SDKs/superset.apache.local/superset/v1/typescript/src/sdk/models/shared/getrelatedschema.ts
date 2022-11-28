import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRelatedSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=include_ids" })
  includeIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;
}

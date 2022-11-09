import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRelatedSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=include_ids" })
  includeIds?: number[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;
}

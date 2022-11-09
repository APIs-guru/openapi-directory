import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SearchMetaSortsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  searchMetaSorts200ApplicationJsonStrings?: string[];

  @Metadata()
  searchMetaSorts200TextJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}

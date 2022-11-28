import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SearchMetaSortsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  searchMetaSorts200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  searchMetaSorts200TextJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}

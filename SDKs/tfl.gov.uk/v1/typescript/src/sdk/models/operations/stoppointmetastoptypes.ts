import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StopPointMetaStopTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stopPointMetaStopTypes200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  stopPointMetaStopTypes200TextJsonStrings?: string[];
}

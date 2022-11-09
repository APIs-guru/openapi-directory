import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StopPointMetaStopTypesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopPointMetaStopTypes200ApplicationJsonStrings?: string[];

  @Metadata()
  stopPointMetaStopTypes200TextJsonStrings?: string[];
}

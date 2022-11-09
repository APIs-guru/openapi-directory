import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAudioPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=word" })
  word: string;
}

export enum GetAudioUseCanonicalEnum {
    False = "false"
,    True = "true"
}


export class GetAudioQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=useCanonical" })
  useCanonical?: GetAudioUseCanonicalEnum;
}


export class GetAudioRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAudioPathParams;

  @Metadata()
  queryParams: GetAudioQueryParams;
}


export class GetAudioResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}

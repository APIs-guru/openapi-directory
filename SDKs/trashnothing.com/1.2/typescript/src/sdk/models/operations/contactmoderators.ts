import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContactModeratorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class ContactModeratorsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=subject" })
  subject: string;
}


export class ContactModeratorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContactModeratorsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: ContactModeratorsRequestBody;
}


export class ContactModeratorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

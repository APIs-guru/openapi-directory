import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateTrustProductChannelEndpointAssignmentServerList = [
	"https://trusthub.twilio.com",
] as const;


export class CreateTrustProductChannelEndpointAssignmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=TrustProductSid" })
  trustProductSid: string;
}


export class CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=ChannelEndpointSid;" })
  channelEndpointSid: string;

  @SpeakeasyMetadata({ data: "form, name=ChannelEndpointType;" })
  channelEndpointType: string;
}


export class CreateTrustProductChannelEndpointAssignmentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateTrustProductChannelEndpointAssignmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateTrustProductChannelEndpointAssignmentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTrustProductChannelEndpointAssignmentCreateTrustProductChannelEndpointAssignmentRequest;

  @SpeakeasyMetadata()
  security: CreateTrustProductChannelEndpointAssignmentSecurity;
}


export class CreateTrustProductChannelEndpointAssignmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trusthubV1TrustProductTrustProductChannelEndpointAssignment?: shared.TrusthubV1TrustProductTrustProductChannelEndpointAssignment;
}

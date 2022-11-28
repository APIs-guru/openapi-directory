import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InstructPayoutV3PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}


export class InstructPayoutV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InstructPayoutV3PathParams;
}


export class InstructPayoutV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;

  @SpeakeasyMetadata()
  inlineResponse404?: any;

  @SpeakeasyMetadata()
  inlineResponse409?: any;
}

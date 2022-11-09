import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InstructPayoutV3PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=payoutId" })
  payoutId: string;
}


export class InstructPayoutV3Request extends SpeakeasyBase {
  @Metadata()
  pathParams: InstructPayoutV3PathParams;
}


export class InstructPayoutV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;

  @Metadata()
  inlineResponse404?: any;

  @Metadata()
  inlineResponse409?: any;
}

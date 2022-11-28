import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSourceAccountsV3QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fundingAccountId" })
  fundingAccountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeUserDeleted" })
  includeUserDeleted?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=physicalAccountId" })
  physicalAccountId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=physicalAccountName" })
  physicalAccountName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: shared.SourceAccountTypeEnum;
}


export class GetSourceAccountsV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSourceAccountsV3QueryParams;
}


export class GetSourceAccountsV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listSourceAccountResponseV3?: shared.ListSourceAccountResponseV3;

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
}

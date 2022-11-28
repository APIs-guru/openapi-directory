import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EnablePanoramaFirewallPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class EnablePanoramaFirewallSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKeyAuth: shared.SchemeApiKeyAuth;
}


export class EnablePanoramaFirewallRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EnablePanoramaFirewallPathParams;

  @SpeakeasyMetadata()
  security: EnablePanoramaFirewallSecurity;
}


export class EnablePanoramaFirewallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}

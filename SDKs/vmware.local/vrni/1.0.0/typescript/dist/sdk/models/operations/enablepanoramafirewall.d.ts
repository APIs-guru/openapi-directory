import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnablePanoramaFirewallPathParams extends SpeakeasyBase {
    id: string;
}
export declare class EnablePanoramaFirewallSecurity extends SpeakeasyBase {
    apiKeyAuth: shared.SchemeApiKeyAuth;
}
export declare class EnablePanoramaFirewallRequest extends SpeakeasyBase {
    pathParams: EnablePanoramaFirewallPathParams;
    security: EnablePanoramaFirewallSecurity;
}
export declare class EnablePanoramaFirewallResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export var ListAvailablePhoneNumberMachineToMachineServerList = [
    "https://api.twilio.com",
];
var ListAvailablePhoneNumberMachineToMachinePathParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMachineToMachinePathParams, _super);
    function ListAvailablePhoneNumberMachineToMachinePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachinePathParams.prototype, "accountSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=CountryCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachinePathParams.prototype, "countryCode", void 0);
    return ListAvailablePhoneNumberMachineToMachinePathParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMachineToMachinePathParams };
var ListAvailablePhoneNumberMachineToMachineQueryParams = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMachineToMachineQueryParams, _super);
    function ListAvailablePhoneNumberMachineToMachineQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=AreaCode" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "areaCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Beta" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "beta", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Contains" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "contains", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Distance" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "distance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeAllAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "excludeAllAddressRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeForeignAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "excludeForeignAddressRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ExcludeLocalAddressRequired" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "excludeLocalAddressRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=FaxEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "faxEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InLata" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "inLata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InLocality" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "inLocality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InPostalCode" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "inPostalCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InRateCenter" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "inRateCenter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=InRegion" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "inRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "mmsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NearLatLong" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "nearLatLong", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NearNumber" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "nearNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=SmsEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "smsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VoiceEnabled" }),
        __metadata("design:type", Boolean)
    ], ListAvailablePhoneNumberMachineToMachineQueryParams.prototype, "voiceEnabled", void 0);
    return ListAvailablePhoneNumberMachineToMachineQueryParams;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMachineToMachineQueryParams };
var ListAvailablePhoneNumberMachineToMachineSecurity = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMachineToMachineSecurity, _super);
    function ListAvailablePhoneNumberMachineToMachineSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeAccountSidAuthToken)
    ], ListAvailablePhoneNumberMachineToMachineSecurity.prototype, "accountSidAuthToken", void 0);
    return ListAvailablePhoneNumberMachineToMachineSecurity;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMachineToMachineSecurity };
var ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse, _super);
    function ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=available_phone_numbers", elemType: shared.ApiV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine }),
        __metadata("design:type", Array)
    ], ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse.prototype, "availablePhoneNumbers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=end" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse.prototype, "end", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=first_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse.prototype, "firstPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse.prototype, "nextPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=previous_page_uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse.prototype, "previousPageUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=start" }),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse.prototype, "start", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=uri" }),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse.prototype, "uri", void 0);
    return ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse };
var ListAvailablePhoneNumberMachineToMachineRequest = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMachineToMachineRequest, _super);
    function ListAvailablePhoneNumberMachineToMachineRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineRequest.prototype, "serverUrl", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberMachineToMachinePathParams)
    ], ListAvailablePhoneNumberMachineToMachineRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberMachineToMachineQueryParams)
    ], ListAvailablePhoneNumberMachineToMachineRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberMachineToMachineSecurity)
    ], ListAvailablePhoneNumberMachineToMachineRequest.prototype, "security", void 0);
    return ListAvailablePhoneNumberMachineToMachineRequest;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMachineToMachineRequest };
var ListAvailablePhoneNumberMachineToMachineResponse = /** @class */ (function (_super) {
    __extends(ListAvailablePhoneNumberMachineToMachineResponse, _super);
    function ListAvailablePhoneNumberMachineToMachineResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], ListAvailablePhoneNumberMachineToMachineResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse)
    ], ListAvailablePhoneNumberMachineToMachineResponse.prototype, "listAvailablePhoneNumberMachineToMachineResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], ListAvailablePhoneNumberMachineToMachineResponse.prototype, "statusCode", void 0);
    return ListAvailablePhoneNumberMachineToMachineResponse;
}(SpeakeasyBase));
export { ListAvailablePhoneNumberMachineToMachineResponse };

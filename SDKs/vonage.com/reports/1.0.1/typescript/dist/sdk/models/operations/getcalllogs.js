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
var GetCallLogsPathParams = /** @class */ (function (_super) {
    __extends(GetCallLogsPathParams, _super);
    function GetCallLogsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=account_id" }),
        __metadata("design:type", String)
    ], GetCallLogsPathParams.prototype, "accountId", void 0);
    return GetCallLogsPathParams;
}(SpeakeasyBase));
export { GetCallLogsPathParams };
export var GetCallLogsDirectionEnum;
(function (GetCallLogsDirectionEnum) {
    GetCallLogsDirectionEnum["Inbound"] = "Inbound";
    GetCallLogsDirectionEnum["Outbound"] = "Outbound";
})(GetCallLogsDirectionEnum || (GetCallLogsDirectionEnum = {}));
var GetCallLogsQueryParams = /** @class */ (function (_super) {
    __extends(GetCallLogsQueryParams, _super);
    function GetCallLogsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destination_user" }),
        __metadata("design:type", String)
    ], GetCallLogsQueryParams.prototype, "destinationUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], GetCallLogsQueryParams.prototype, "direction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end:gte" }),
        __metadata("design:type", String)
    ], GetCallLogsQueryParams.prototype, "endGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end:lte" }),
        __metadata("design:type", String)
    ], GetCallLogsQueryParams.prototype, "endLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", String)
    ], GetCallLogsQueryParams.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" }),
        __metadata("design:type", Number)
    ], GetCallLogsQueryParams.prototype, "page", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetCallLogsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=source_user" }),
        __metadata("design:type", String)
    ], GetCallLogsQueryParams.prototype, "sourceUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start:gte" }),
        __metadata("design:type", String)
    ], GetCallLogsQueryParams.prototype, "startGte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start:lte" }),
        __metadata("design:type", String)
    ], GetCallLogsQueryParams.prototype, "startLte", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", String)
    ], GetCallLogsQueryParams.prototype, "to", void 0);
    return GetCallLogsQueryParams;
}(SpeakeasyBase));
export { GetCallLogsQueryParams };
var GetCallLogsSecurity = /** @class */ (function (_super) {
    __extends(GetCallLogsSecurity, _super);
    function GetCallLogsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetCallLogsSecurity.prototype, "bearerAuth", void 0);
    return GetCallLogsSecurity;
}(SpeakeasyBase));
export { GetCallLogsSecurity };
var GetCallLogsRequest = /** @class */ (function (_super) {
    __extends(GetCallLogsRequest, _super);
    function GetCallLogsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCallLogsPathParams)
    ], GetCallLogsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCallLogsQueryParams)
    ], GetCallLogsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetCallLogsSecurity)
    ], GetCallLogsRequest.prototype, "security", void 0);
    return GetCallLogsRequest;
}(SpeakeasyBase));
export { GetCallLogsRequest };
var GetCallLogsResponse = /** @class */ (function (_super) {
    __extends(GetCallLogsResponse, _super);
    function GetCallLogsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CallLogsHalResponse)
    ], GetCallLogsResponse.prototype, "callLogsHalResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetCallLogsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetCallLogsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ValidationErrorsResponse)
    ], GetCallLogsResponse.prototype, "validationErrorsResponse", void 0);
    return GetCallLogsResponse;
}(SpeakeasyBase));
export { GetCallLogsResponse };

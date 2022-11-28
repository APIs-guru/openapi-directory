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
var GetProblemEventPathParams = /** @class */ (function (_super) {
    __extends(GetProblemEventPathParams, _super);
    function GetProblemEventPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", String)
    ], GetProblemEventPathParams.prototype, "id", void 0);
    return GetProblemEventPathParams;
}(SpeakeasyBase));
export { GetProblemEventPathParams };
var GetProblemEventQueryParams = /** @class */ (function (_super) {
    __extends(GetProblemEventQueryParams, _super);
    function GetProblemEventQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time" }),
        __metadata("design:type", Number)
    ], GetProblemEventQueryParams.prototype, "time", void 0);
    return GetProblemEventQueryParams;
}(SpeakeasyBase));
export { GetProblemEventQueryParams };
var GetProblemEventSecurity = /** @class */ (function (_super) {
    __extends(GetProblemEventSecurity, _super);
    function GetProblemEventSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeApiKeyAuth)
    ], GetProblemEventSecurity.prototype, "apiKeyAuth", void 0);
    return GetProblemEventSecurity;
}(SpeakeasyBase));
export { GetProblemEventSecurity };
var GetProblemEventRequest = /** @class */ (function (_super) {
    __extends(GetProblemEventRequest, _super);
    function GetProblemEventRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProblemEventPathParams)
    ], GetProblemEventRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProblemEventQueryParams)
    ], GetProblemEventRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetProblemEventSecurity)
    ], GetProblemEventRequest.prototype, "security", void 0);
    return GetProblemEventRequest;
}(SpeakeasyBase));
export { GetProblemEventRequest };
var GetProblemEventResponse = /** @class */ (function (_super) {
    __extends(GetProblemEventResponse, _super);
    function GetProblemEventResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ApiError)
    ], GetProblemEventResponse.prototype, "apiError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetProblemEventResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProblemEvent)
    ], GetProblemEventResponse.prototype, "problemEvent", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetProblemEventResponse.prototype, "statusCode", void 0);
    return GetProblemEventResponse;
}(SpeakeasyBase));
export { GetProblemEventResponse };

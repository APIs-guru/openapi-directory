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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var GetAccountAgentsQueryParams = /** @class */ (function (_super) {
    __extends(GetAccountAgentsQueryParams, _super);
    function GetAccountAgentsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], GetAccountAgentsQueryParams.prototype, "search", void 0);
    return GetAccountAgentsQueryParams;
}(SpeakeasyBase));
export { GetAccountAgentsQueryParams };
var GetAccountAgentsSecurity = /** @class */ (function (_super) {
    __extends(GetAccountAgentsSecurity, _super);
    function GetAccountAgentsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], GetAccountAgentsSecurity.prototype, "bearerAuth", void 0);
    return GetAccountAgentsSecurity;
}(SpeakeasyBase));
export { GetAccountAgentsSecurity };
var GetAccountAgentsRequest = /** @class */ (function (_super) {
    __extends(GetAccountAgentsRequest, _super);
    function GetAccountAgentsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", GetAccountAgentsQueryParams)
    ], GetAccountAgentsRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", GetAccountAgentsSecurity)
    ], GetAccountAgentsRequest.prototype, "security", void 0);
    return GetAccountAgentsRequest;
}(SpeakeasyBase));
export { GetAccountAgentsRequest };
var GetAccountAgentsResponse = /** @class */ (function (_super) {
    __extends(GetAccountAgentsResponse, _super);
    function GetAccountAgentsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ elemType: shared.Agent }),
        __metadata("design:type", Array)
    ], GetAccountAgentsResponse.prototype, "agents", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], GetAccountAgentsResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], GetAccountAgentsResponse.prototype, "statusCode", void 0);
    return GetAccountAgentsResponse;
}(SpeakeasyBase));
export { GetAccountAgentsResponse };

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
var RemoveServicePathParams = /** @class */ (function (_super) {
    __extends(RemoveServicePathParams, _super);
    function RemoveServicePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=service_id" }),
        __metadata("design:type", String)
    ], RemoveServicePathParams.prototype, "serviceId", void 0);
    return RemoveServicePathParams;
}(SpeakeasyBase));
export { RemoveServicePathParams };
var RemoveServiceSecurity = /** @class */ (function (_super) {
    __extends(RemoveServiceSecurity, _super);
    function RemoveServiceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], RemoveServiceSecurity.prototype, "bearerAuth", void 0);
    return RemoveServiceSecurity;
}(SpeakeasyBase));
export { RemoveServiceSecurity };
var RemoveServiceRequest = /** @class */ (function (_super) {
    __extends(RemoveServiceRequest, _super);
    function RemoveServiceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", RemoveServicePathParams)
    ], RemoveServiceRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", RemoveServiceSecurity)
    ], RemoveServiceRequest.prototype, "security", void 0);
    return RemoveServiceRequest;
}(SpeakeasyBase));
export { RemoveServiceRequest };
var RemoveServiceResponse = /** @class */ (function (_super) {
    __extends(RemoveServiceResponse, _super);
    function RemoveServiceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], RemoveServiceResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], RemoveServiceResponse.prototype, "statusCode", void 0);
    return RemoveServiceResponse;
}(SpeakeasyBase));
export { RemoveServiceResponse };

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
var DetailAdvisoryPathParams = /** @class */ (function (_super) {
    __extends(DetailAdvisoryPathParams, _super);
    function DetailAdvisoryPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=advisory_id" }),
        __metadata("design:type", String)
    ], DetailAdvisoryPathParams.prototype, "advisoryId", void 0);
    return DetailAdvisoryPathParams;
}(SpeakeasyBase));
export { DetailAdvisoryPathParams };
var DetailAdvisorySecurity = /** @class */ (function (_super) {
    __extends(DetailAdvisorySecurity, _super);
    function DetailAdvisorySecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeRhIdentity)
    ], DetailAdvisorySecurity.prototype, "rhIdentity", void 0);
    return DetailAdvisorySecurity;
}(SpeakeasyBase));
export { DetailAdvisorySecurity };
var DetailAdvisoryRequest = /** @class */ (function (_super) {
    __extends(DetailAdvisoryRequest, _super);
    function DetailAdvisoryRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DetailAdvisoryPathParams)
    ], DetailAdvisoryRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DetailAdvisorySecurity)
    ], DetailAdvisoryRequest.prototype, "security", void 0);
    return DetailAdvisoryRequest;
}(SpeakeasyBase));
export { DetailAdvisoryRequest };
var DetailAdvisoryResponse = /** @class */ (function (_super) {
    __extends(DetailAdvisoryResponse, _super);
    function DetailAdvisoryResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DetailAdvisoryResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DetailAdvisoryResponse.prototype, "statusCode", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.ControllersAdvisoryDetailResponse)
    ], DetailAdvisoryResponse.prototype, "controllersAdvisoryDetailResponse", void 0);
    return DetailAdvisoryResponse;
}(SpeakeasyBase));
export { DetailAdvisoryResponse };

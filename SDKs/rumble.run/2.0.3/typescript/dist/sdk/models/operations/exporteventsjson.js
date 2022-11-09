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
var ExportEventsJsonQueryParams = /** @class */ (function (_super) {
    __extends(ExportEventsJsonQueryParams, _super);
    function ExportEventsJsonQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], ExportEventsJsonQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=search" }),
        __metadata("design:type", String)
    ], ExportEventsJsonQueryParams.prototype, "search", void 0);
    return ExportEventsJsonQueryParams;
}(SpeakeasyBase));
export { ExportEventsJsonQueryParams };
var ExportEventsJsonSecurity = /** @class */ (function (_super) {
    __extends(ExportEventsJsonSecurity, _super);
    function ExportEventsJsonSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerAuth)
    ], ExportEventsJsonSecurity.prototype, "bearerAuth", void 0);
    return ExportEventsJsonSecurity;
}(SpeakeasyBase));
export { ExportEventsJsonSecurity };
var ExportEventsJsonRequest = /** @class */ (function (_super) {
    __extends(ExportEventsJsonRequest, _super);
    function ExportEventsJsonRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", ExportEventsJsonQueryParams)
    ], ExportEventsJsonRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", ExportEventsJsonSecurity)
    ], ExportEventsJsonRequest.prototype, "security", void 0);
    return ExportEventsJsonRequest;
}(SpeakeasyBase));
export { ExportEventsJsonRequest };
var ExportEventsJsonResponse = /** @class */ (function (_super) {
    __extends(ExportEventsJsonResponse, _super);
    function ExportEventsJsonResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], ExportEventsJsonResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata({ elemType: shared.Event }),
        __metadata("design:type", Array)
    ], ExportEventsJsonResponse.prototype, "events", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], ExportEventsJsonResponse.prototype, "statusCode", void 0);
    return ExportEventsJsonResponse;
}(SpeakeasyBase));
export { ExportEventsJsonResponse };

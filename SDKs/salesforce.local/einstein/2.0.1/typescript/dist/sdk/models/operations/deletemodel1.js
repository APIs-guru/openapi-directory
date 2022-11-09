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
var DeleteModel1PathParams = /** @class */ (function (_super) {
    __extends(DeleteModel1PathParams, _super);
    function DeleteModel1PathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=modelId" }),
        __metadata("design:type", String)
    ], DeleteModel1PathParams.prototype, "modelId", void 0);
    return DeleteModel1PathParams;
}(SpeakeasyBase));
export { DeleteModel1PathParams };
var DeleteModel1Security = /** @class */ (function (_super) {
    __extends(DeleteModel1Security, _super);
    function DeleteModel1Security() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeBearerToken)
    ], DeleteModel1Security.prototype, "bearerToken", void 0);
    return DeleteModel1Security;
}(SpeakeasyBase));
export { DeleteModel1Security };
var DeleteModel1Request = /** @class */ (function (_super) {
    __extends(DeleteModel1Request, _super);
    function DeleteModel1Request() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteModel1PathParams)
    ], DeleteModel1Request.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", DeleteModel1Security)
    ], DeleteModel1Request.prototype, "security", void 0);
    return DeleteModel1Request;
}(SpeakeasyBase));
export { DeleteModel1Request };
var DeleteModel1Response = /** @class */ (function (_super) {
    __extends(DeleteModel1Response, _super);
    function DeleteModel1Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], DeleteModel1Response.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.DeletionResponse)
    ], DeleteModel1Response.prototype, "deletionResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], DeleteModel1Response.prototype, "statusCode", void 0);
    return DeleteModel1Response;
}(SpeakeasyBase));
export { DeleteModel1Response };

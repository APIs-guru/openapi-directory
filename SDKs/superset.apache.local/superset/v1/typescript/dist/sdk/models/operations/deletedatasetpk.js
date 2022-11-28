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
var DeleteDatasetPkPathParams = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkPathParams, _super);
    function DeleteDatasetPkPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pk" }),
        __metadata("design:type", Number)
    ], DeleteDatasetPkPathParams.prototype, "pk", void 0);
    return DeleteDatasetPkPathParams;
}(SpeakeasyBase));
export { DeleteDatasetPkPathParams };
var DeleteDatasetPkSecurity = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkSecurity, _super);
    function DeleteDatasetPkSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" }),
        __metadata("design:type", shared.SchemeJwt)
    ], DeleteDatasetPkSecurity.prototype, "jwt", void 0);
    return DeleteDatasetPkSecurity;
}(SpeakeasyBase));
export { DeleteDatasetPkSecurity };
var DeleteDatasetPk200ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPk200ApplicationJson, _super);
    function DeleteDatasetPk200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPk200ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPk200ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPk200ApplicationJson };
var DeleteDatasetPk401ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPk401ApplicationJson, _super);
    function DeleteDatasetPk401ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPk401ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPk401ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPk401ApplicationJson };
var DeleteDatasetPk403ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPk403ApplicationJson, _super);
    function DeleteDatasetPk403ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPk403ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPk403ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPk403ApplicationJson };
var DeleteDatasetPk404ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPk404ApplicationJson, _super);
    function DeleteDatasetPk404ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPk404ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPk404ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPk404ApplicationJson };
var DeleteDatasetPk422ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPk422ApplicationJson, _super);
    function DeleteDatasetPk422ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPk422ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPk422ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPk422ApplicationJson };
var DeleteDatasetPk500ApplicationJson = /** @class */ (function (_super) {
    __extends(DeleteDatasetPk500ApplicationJson, _super);
    function DeleteDatasetPk500ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=message" }),
        __metadata("design:type", String)
    ], DeleteDatasetPk500ApplicationJson.prototype, "message", void 0);
    return DeleteDatasetPk500ApplicationJson;
}(SpeakeasyBase));
export { DeleteDatasetPk500ApplicationJson };
var DeleteDatasetPkRequest = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkRequest, _super);
    function DeleteDatasetPkRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkPathParams)
    ], DeleteDatasetPkRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPkSecurity)
    ], DeleteDatasetPkRequest.prototype, "security", void 0);
    return DeleteDatasetPkRequest;
}(SpeakeasyBase));
export { DeleteDatasetPkRequest };
var DeleteDatasetPkResponse = /** @class */ (function (_super) {
    __extends(DeleteDatasetPkResponse, _super);
    function DeleteDatasetPkResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteDatasetPkResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPk200ApplicationJson)
    ], DeleteDatasetPkResponse.prototype, "deleteDatasetPk200ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPk401ApplicationJson)
    ], DeleteDatasetPkResponse.prototype, "deleteDatasetPk401ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPk403ApplicationJson)
    ], DeleteDatasetPkResponse.prototype, "deleteDatasetPk403ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPk404ApplicationJson)
    ], DeleteDatasetPkResponse.prototype, "deleteDatasetPk404ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPk422ApplicationJson)
    ], DeleteDatasetPkResponse.prototype, "deleteDatasetPk422ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteDatasetPk500ApplicationJson)
    ], DeleteDatasetPkResponse.prototype, "deleteDatasetPk500ApplicationJsonObject", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteDatasetPkResponse.prototype, "statusCode", void 0);
    return DeleteDatasetPkResponse;
}(SpeakeasyBase));
export { DeleteDatasetPkResponse };

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
var SavePostLocationRequestBody = /** @class */ (function (_super) {
    __extends(SavePostLocationRequestBody, _super);
    function SavePostLocationRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=latitude" }),
        __metadata("design:type", Number)
    ], SavePostLocationRequestBody.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=longitude" }),
        __metadata("design:type", Number)
    ], SavePostLocationRequestBody.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], SavePostLocationRequestBody.prototype, "name", void 0);
    return SavePostLocationRequestBody;
}(SpeakeasyBase));
export { SavePostLocationRequestBody };
var SavePostLocation200ApplicationJson = /** @class */ (function (_super) {
    __extends(SavePostLocation200ApplicationJson, _super);
    function SavePostLocation200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", Number)
    ], SavePostLocation200ApplicationJson.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", Number)
    ], SavePostLocation200ApplicationJson.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SavePostLocation200ApplicationJson.prototype, "name", void 0);
    return SavePostLocation200ApplicationJson;
}(SpeakeasyBase));
export { SavePostLocation200ApplicationJson };
var SavePostLocationRequest = /** @class */ (function (_super) {
    __extends(SavePostLocationRequest, _super);
    function SavePostLocationRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", SavePostLocationRequestBody)
    ], SavePostLocationRequest.prototype, "request", void 0);
    return SavePostLocationRequest;
}(SpeakeasyBase));
export { SavePostLocationRequest };
var SavePostLocationResponse = /** @class */ (function (_super) {
    __extends(SavePostLocationResponse, _super);
    function SavePostLocationResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], SavePostLocationResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], SavePostLocationResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: SavePostLocation200ApplicationJson }),
        __metadata("design:type", Array)
    ], SavePostLocationResponse.prototype, "savePostLocation200ApplicationJsonObjects", void 0);
    return SavePostLocationResponse;
}(SpeakeasyBase));
export { SavePostLocationResponse };

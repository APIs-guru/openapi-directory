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
// CommentaryCommentaryEmployee
/**
 * The commentarys' employee
**/
var CommentaryCommentaryEmployee = /** @class */ (function (_super) {
    __extends(CommentaryCommentaryEmployee, _super);
    function CommentaryCommentaryEmployee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], CommentaryCommentaryEmployee.prototype, "atHref", void 0);
    __decorate([
        Metadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], CommentaryCommentaryEmployee.prototype, "atRel", void 0);
    __decorate([
        Metadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], CommentaryCommentaryEmployee.prototype, "atTitle", void 0);
    return CommentaryCommentaryEmployee;
}(SpeakeasyBase));
export { CommentaryCommentaryEmployee };
// CommentaryCommentaryPayRun
/**
 * The commentarys' pay run
**/
var CommentaryCommentaryPayRun = /** @class */ (function (_super) {
    __extends(CommentaryCommentaryPayRun, _super);
    function CommentaryCommentaryPayRun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=@href" }),
        __metadata("design:type", String)
    ], CommentaryCommentaryPayRun.prototype, "atHref", void 0);
    __decorate([
        Metadata({ data: "json, name=@rel" }),
        __metadata("design:type", String)
    ], CommentaryCommentaryPayRun.prototype, "atRel", void 0);
    __decorate([
        Metadata({ data: "json, name=@title" }),
        __metadata("design:type", String)
    ], CommentaryCommentaryPayRun.prototype, "atTitle", void 0);
    return CommentaryCommentaryPayRun;
}(SpeakeasyBase));
export { CommentaryCommentaryPayRun };
var CommentaryCommentary = /** @class */ (function (_super) {
    __extends(CommentaryCommentary, _super);
    function CommentaryCommentary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Created" }),
        __metadata("design:type", Date)
    ], CommentaryCommentary.prototype, "created", void 0);
    __decorate([
        Metadata({ data: "json, name=Detail" }),
        __metadata("design:type", String)
    ], CommentaryCommentary.prototype, "detail", void 0);
    __decorate([
        Metadata({ data: "json, name=Employee" }),
        __metadata("design:type", CommentaryCommentaryEmployee)
    ], CommentaryCommentary.prototype, "employee", void 0);
    __decorate([
        Metadata({ data: "json, name=PayRun" }),
        __metadata("design:type", CommentaryCommentaryPayRun)
    ], CommentaryCommentary.prototype, "payRun", void 0);
    return CommentaryCommentary;
}(SpeakeasyBase));
export { CommentaryCommentary };
var Commentary = /** @class */ (function (_super) {
    __extends(Commentary, _super);
    function Commentary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=Commentary" }),
        __metadata("design:type", CommentaryCommentary)
    ], Commentary.prototype, "commentary", void 0);
    return Commentary;
}(SpeakeasyBase));
export { Commentary };

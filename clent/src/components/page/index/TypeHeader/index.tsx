"use client";

import { useEffect, useRef, useState } from "react";
import type {
  AwaitedReactNode,
  FC,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import classNames from "classnames";
import useUserData from "@/store/user/user-data";
// import { responseType as typeTreeRsponseType } from "@/request/type/type-tree-index";
import style from "../index.module.scss";

type changeOptionType = { type?: string; tag?: any; follow?: true };
export type changeType = ({
  type,
  tag,
}: {
  type?: string;
  tag?: string;
  follow?: true;
}) => void;
interface propsType {
  data: any;
  className?: string;
  change: ({ type, tag, follow }: changeOptionType) => void;
}
/** 首页顶部展示类型选择的头部组件，穿盾type-tree数组即可*/
const TypeHeader: FC<propsType> = (props) => {
  let { data } = props;
  let userData = useUserData((s) => s.data);
  const [activeTypeKey, setActiveTypeKey] = useState(data[0]?.id);
  const [activeTagKey, setActiveTagKey] = useState<string | number>(0);
  /** 获取type和tag在数组中的位置，判断是修改了type还是tag*/
  const typeIndex = data.findIndex(
    (item: { id: any }) => item.id == activeTypeKey
  );
  const tagIndex = data[typeIndex]?.tags?.findIndex(
    (item: { id: number }) => item.id == activeTagKey
  );

  const tagList = data.find(
    (item: { id: any }) => item.id == activeTypeKey
  )?.tags;

  let fristLoad = useRef(true);
  useEffect(() => {
    if (fristLoad.current) {
      fristLoad.current = false;
      return;
    }
    /** 判断是否选择了全部*/
    let option: changeOptionType = {
      /** 如果下属的tag的id index等于0说明找的是type，反之是tag*/
      type: !tagIndex ? activeTypeKey : undefined,
      /** 如果自己的id和上面的type的id相同那么设置undefined，否则就是查询tag*/
      tag: activeTagKey,
      /** 判断是否选择了关注*/
      follow: typeIndex == 0 || undefined,
    };

    // if (
    //   option.tag != undefined ||
    //   option.type != undefined ||
    //   option.follow != undefined ||
    //   typeIndex == 0
    // ) {
    props.change(option);
    // }
  }, [activeTypeKey, activeTagKey]);

  function switchType(id: string) {
    setActiveTypeKey(id);
    setActiveTagKey(0);
  }
  function switchTag(id: string | number) {
    console.log(id, "tagId");
    setActiveTagKey(id);
  }

  return (
    <>
      <div
        className={classNames([
          "sm:hidden",
          style["type-header"],
          "container-xs bg-white",
          "border-b-solid border-slate-100",
          props.className,
        ])}
      >
        <div className="flex">
          {data.map(
            (item: {
              isLogin: any;
              id: string;
              label:
                | string
                | number
                | bigint
                | boolean
                | ReactElement<any, string | JSXElementConstructor<any>>
                | Iterable<ReactNode>
                | ReactPortal
                | Promise<AwaitedReactNode>
                | null
                | undefined;
            }) => {
              return (
                (!item.isLogin || userData) && (
                  <div
                    key={`type${item.id}`}
                    className={classNames([
                      "flex h-11 cursor-pointer items-center px-2",
                      item.id == activeTypeKey ? style["type-active"] : "",
                      style.shadow,
                    ])}
                    onClick={() => switchType(item.id)}
                  >
                    {item.label}
                  </div>
                )
              );
            }
          )}
        </div>
      </div>

      {
        <div className={classNames(["container-xs bg-[#f4f5f5] pb-3 pt-1"])}>
          <div className="flex flex-wrap">
            {tagList?.length > 0 ? (
              <div
                key={0}
                className={classNames([
                  "flex h-6 cursor-pointer items-center px-2.5",
                  0 == activeTagKey ? style["tag-active"] : "",
                  "bg-white",
                  "rounded-2xl",
                  "text-[#909090]",
                  "mr-2",
                  "mt-2",
                ])}
                onClick={() => switchTag(0)}
              >
                全部
              </div>
            ) : null}

            {tagList?.map(
              (
                item: {
                  id: string | number;
                  name: string;
                },
                index: any
              ) => (
                <div
                  key={item.id}
                  className={classNames([
                    "flex h-6 cursor-pointer items-center px-2.5",
                    item.id == activeTagKey ? style["tag-active"] : "",
                    "bg-white",
                    "rounded-2xl",
                    "text-[#909090]",
                    "mr-2",
                    "mt-2",
                  ])}
                  onClick={() => switchTag(item.id)}
                >
                  {item.name}
                </div>
              )
            )}
          </div>
        </div>
      }
    </>
  );
};
export default TypeHeader;

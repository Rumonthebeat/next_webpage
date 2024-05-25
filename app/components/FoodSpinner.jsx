"use client";
import React, { useState, useEffect, useMemo } from 'react';

const FoodSpinner = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const items = useMemo(() => 
        ['砂锅🫕sr', 
         '麻辣烫🌶🫕ssr', 
         '烧烤🍖🍗ssr', 
         '粥🥣r', 
         '扁食🍥sr',
         '沙县🍥sr',
         '小炒🥬sr',
         '米线🍲sr',
         '生腌🐟🥣ssr',
         '关东煮🍢sr',
         '冒菜🌶sr',
         '炸鸡🍗r',
         '牛排🥩sr',
         '田鸡🐸sr',
         '寿司🍣sr',
         '茶餐厅🍳sr',
         '鸭血粉丝🫕sr',
         '沙茶面🍜🍤ssr',
         '肉蟹煲🥘sr',
         '披萨🍕🧀sr',
         '烤鸭🍖🦆ssr',
         '水饺🥟r',
         '螺狮粉🍜sr',
         '韩料🍜sr',
         '焗饭🍛sr',
         '新疆米粉🌶sr',
         '汉堡🍔sr',
         '烤肉饭🥓r',
         '云吞🥟sr',
         '麻辣拌🌶🥓ssr',
         '拉面🍜r',
         '寿喜烧🫕sr',
         '便当/日式盖饭🍥sr',
         '局口拌面🍜sr',
         '冷面🍜sr',
         '牛肉面🍜sr',
         '乌冬面🍜sr',
         '炖汤/炖罐🥣sr',
         '蹄花汤🥣sr',
         '蛋包饭🍛sr',
         '鸡蛋汉堡🍔sr',
         '肯德基🍔sr',
         '小龙虾🦞🌶ssr',
         '泰国菜🫔sr',
         '生煎/锅贴🍘sr',
         '酸菜鱼🐟ssr',
         '麻辣香锅🌶🥘ssr',
         '意面🍝sr',
         '凉皮/肉夹馍/牛筋面sr🫓',
         '鲍鱼饭🍚sr',
         '花甲粉🍜sr',
         '鼎泰丰🥟🍥ssr',
         '粿条🥣sr',
         '姜母鸭🦆🥘ssr',
         '兰州拉面🍜sr',
         '桂林米粉🫕sr',
         '冬粉鸭🫕sr',
         '烤肋排/猪排饭🍖sr',
         '烧肉粽🍙sr',
         '汤包🥟sr',
         '鸡排🐔sr',
         '里脊肉串 + 汤or粥🍖🥣ssr',
         '台湾菜🍲sr',
         '煲仔饭🍲sr',
         '鸭肉面线🍲sr',
         'pho🍜sr',
        ], []);
    const spinWheel = () => {
      setIsSpinning(true);
      setSelectedItem(null); 
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * items.length);
        setSelectedItem(items[randomIndex]);
        setIsSpinning(false);
      }, 3000); 
    };
  
    useEffect(() => {
      let interval;
      if (isSpinning) {
        interval = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * items.length);
          setSelectedItem(items[randomIndex]);
        }, 100); 
      }
      return () => clearInterval(interval);
    }, [isSpinning, items]);
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="text-4xl font-bold mb-6 text-white py-4">今天吃什么</h1>
        <div className="flex flex-col items-center">
          <button 
            className="bg-gradient-to-tr from-blue-500 to-green-500 text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-110"
            onClick={spinWheel}
            disabled={isSpinning}
          >
            转一下
          </button>
          {selectedItem && (
            <p className="text-white text-lg mb-6 lg:text-xl mt-4">
              今天就吃: <span className="text-white font-bold">{selectedItem}</span>
            </p>
          )}
        </div>
      </div>
    );
  }

export default FoodSpinner;

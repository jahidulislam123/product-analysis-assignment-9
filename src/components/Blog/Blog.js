import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div className='container'>
            <h1>Question And Answer</h1>
            <br /><br /><br />
            <div className='text' >
                <h1>Question: What is Context Api ?</h1>
                <p>Ans :The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease.The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. </p>

            </div>
            <div  className='text'>
                <h1>Question:What is Semantic tag?</h1>

                <p>Ans:Semantic tags solve both problems simultaneously, giving you greater flexibility and control over your reporting structures while simplifying and speeding up your work. Semantic tags allow you to set up a list of tags and corresponding key figures and assign these tags to FSV items. This keeps report definitions stable even as further accounts are added and as more FSVs are created. Because semantic tags allow SAP to predeliver more thorough reporting structures, you don't have to create as many as before. You benefit from this enhanced predelivered reporting while having an easier way to create custom analyses and multi-dimension drill-downs.

Here's how they work: Semantic tags are short text identifiers that you use to represent key figures. When you assign these tags to FSV items, they become stable across your reports. You can also use them to create key performance indicators (KPIs) to enhance your oversight of your finances. Rather than recreating your reports and analytical queries every time you create a new FSV, for example, the semantic tags remain stable across these reports, thus easing your workload. You just select the respective FSV during runtime to change the selection. And semantic tags automatically reflect in reports and KPIs whenever your FSV structure changes, which means less coding for you.</p>
            </div>


            <div  className='text'>
                <h1>Question: Deffernce Between inline and Block?</h1>
                <p>A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.

A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Two commonly used block elements are: p and 

The p element defines a paragraph in an HTML document.

The element defines a division or a section in an HTML document</p>

<p>An inline element does not start on a new line.

An inline element only takes up as much width as necessary.

This is a  element inside a paragraph. </p>


            
  </div>


        </div>
    );
};

export default Blog;